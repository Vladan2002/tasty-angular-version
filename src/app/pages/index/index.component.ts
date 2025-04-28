import { Component, OnInit } from '@angular/core';
import { TastyService } from '../../../core/services/tasty.service';
import { Recipe } from './interfaces/recipe.interface';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  loaderSource = "assets/loader-for-recipes.gif";
  recipes: Recipe[] = [];
  isLoading: boolean = true;

  constructor(private tastyService: TastyService) {}

  ngOnInit() {
    this.fetchInitialData();
  }

  private fetchInitialData(): void {
    this.tastyService.getRecipes({ from: '0', size: '20' }).subscribe({
      next: (data) => {
        this.recipes = this.mapRecipes(data.results || []);
        this.isLoading = false;
        console.log(this.recipes);
      },
      error: (err) => {
        console.error('Error while fetching:', err);
        this.isLoading = false;
      }
    });
  }

  private mapRecipes(data: any[]): Recipe[] {
    return data.map(item => ({
      id: item.id,
      name: item.name,
      thumbnail_url: item.thumbnail_url,
      total_time_minutes: item.total_time_minutes,
      topic: item.topics?.[0]?.name || ''
    }));
  }
}
