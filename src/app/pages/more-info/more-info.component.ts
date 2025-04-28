import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TastyService } from '../../../core/services/tasty.service';
import { Nutrition } from './interfaces/nutrition.interface';
import { More, Instruction } from './interfaces/instruction.interface';

@Component({
  selector: 'app-more-info',
  standalone: false,
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
  instruction: More | null = null;
  nutrition: Nutrition | null = null;
  isLoading: boolean = true;
  loaderSource = "assets/loader-for-recipes.gif";

  constructor(
    private route: ActivatedRoute,
    private tastyService: TastyService
  ) {}

  ngOnInit() {
    this.loadRecipe();
  }

  private loadRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchRecipeDataById(+id);
    } else {
      this.isLoading = false;
    }
  }

  private fetchRecipeDataById(id: number): void {
    this.tastyService.getRecipeById(id).subscribe({
      next: (data) => {
        this.instruction = this.mapRecipeData(data);
        this.nutrition = this.mapNutrition(data);
        this.isLoading = false;
        console.log('Recipe:', this.instruction);
        console.log('Nutrition:', this.nutrition);
      },
      error: (err) => {
        console.error('Error fetching recipe:', err);
        this.isLoading = false;
      }
    });
  }

  private mapRecipeData(response: any): More {
    return {
      thumbnail_url: response.thumbnail_url,
      instructions: this.mapInstructions(response.instructions)
    };
  }

  private mapNutrition(data: any): Nutrition {
    return {
      name: data.name,
      calories: data.nutrition.calories,
      carbohydrates: data.nutrition.carbohydrates,
      fat: data.nutrition.fat,
      protein: data.nutrition.protein,
      sugar: data.nutrition.sugar
    };
  }

  private mapInstructions(instructions: any[]): Instruction[] {
    return instructions.map((step, index) => ({
      step: index + 1,
      display_text: step.display_text
    }));
  }
}
