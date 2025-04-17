import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-food-instructions',
  imports: [
    NgForOf
  ],
  templateUrl: './food-instructions.component.html',
  styleUrl: './food-instructions.component.scss'
})
export class FoodInstructionsComponent {
@Input() recipe: any;
}
