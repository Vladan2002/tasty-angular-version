import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-food-specs',
  standalone: false,
  templateUrl: './food-specs.component.html',
  styleUrl: './food-specs.component.scss'
})
export class FoodSpecsComponent {
  @Input() recipe: any;
}
