import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { Router} from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() recipe!: Recipe;
  constructor(private router: Router) {}
  goToDetail() {
    console.log('Clicked!');
    this.router.navigate(['/more-info', this.recipe.id]);
  }
}
