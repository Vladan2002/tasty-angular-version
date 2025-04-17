import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-kartica',
  standalone: true,
  templateUrl: './kartica.component.html',
  imports: [NgIf],
  styleUrls: ['./kartica.component.scss']
})
export class KarticaComponent {
  @Input() recipe: any;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/recipe', this.recipe.id]);
  }
}
