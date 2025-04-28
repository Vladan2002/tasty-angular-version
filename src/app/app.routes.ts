import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'more-info',
    loadChildren: () => import('./pages/more-info/more-info.module').then(m => m.MoreInfoModule)
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index' }
];
