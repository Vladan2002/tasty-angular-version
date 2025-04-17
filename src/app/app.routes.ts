// src/app/app.routes.ts
import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PocetnaComponent} from './pocetna/pocetna.component';
import {MoreInfoComponent} from './more-info/more-info.component';


export const routes: Routes = [
  { path: '', component: PocetnaComponent },
  { path: 'about', component:AboutComponent },
  { path: 'recipe/:id', component: MoreInfoComponent },
  { path: '**', redirectTo: '' }
];
