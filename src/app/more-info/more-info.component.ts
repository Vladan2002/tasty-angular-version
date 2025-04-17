import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TastyService } from '../../tasty.service';
import {FoodSpecsComponent} from '../food-specs/food-specs.component';
import {FoodInstructionsComponent} from '../food-instructions/food-instructions.component';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-more-info',
  standalone: true,
  imports: [
    FoodSpecsComponent,
    FoodInstructionsComponent,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
  recipe: any;
  loaderSource="assets/loader-for-recipes.gif"

  constructor(
    private route: ActivatedRoute,
    private tastyService: TastyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tastyService.getRecipeById(+id).subscribe((data) => {
        this.recipe = data;
        console.log('Detalji recepta:', this.recipe);
      });
    }
  }
}
