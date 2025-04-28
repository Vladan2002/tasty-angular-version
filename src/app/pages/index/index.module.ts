import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [
    IndexComponent,
    CardComponent,
    HeaderComponent

  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule {}
