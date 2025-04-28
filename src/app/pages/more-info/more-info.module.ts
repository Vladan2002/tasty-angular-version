import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoComponent } from './more-info.component';
import { FoodSpecsComponent } from './components/food-specs/food-specs.component';
import { FoodInstructionsComponent } from './components/food-instructions/food-instructions.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: ':id', component: MoreInfoComponent }
];

@NgModule({
  declarations: [
    MoreInfoComponent,
    FoodSpecsComponent,
    FoodInstructionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MoreInfoModule {}
