import {Component, Input} from '@angular/core';
import {More} from '../../interfaces/instruction.interface';

@Component({
  selector: 'app-food-instructions',
  standalone: false,

  templateUrl: './food-instructions.component.html',
  styleUrl: './food-instructions.component.scss'
})
export class FoodInstructionsComponent {
@Input() instructions: More | undefined;
}
