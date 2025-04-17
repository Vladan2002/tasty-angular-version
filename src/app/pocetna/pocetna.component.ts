import {Component, OnInit} from '@angular/core';
import {KarticaComponent} from '../kartica/kartica.component';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {TastyService} from '../../tasty.service';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [
    KarticaComponent,
    NgForOf,
    HeaderComponent,
    NgOptimizedImage,
    NgIf,
  ],
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit {
  loaderSource="assets/loader-for-recipes.gif"

  recipes: any[] | null = null;
  constructor(private tastyService: TastyService) {}

  ngOnInit() {
    this.tastyService.getRecipes({ from: '0', size: '20' }).subscribe({
      next: (data) => {
        this.recipes = data.results || [];
      },
      error: (err) => console.error('Greška pri dohvaćanju recepata:', err)
    });
  }

}
