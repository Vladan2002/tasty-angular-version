import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { TastyService } from './services/tasty.service';

@NgModule({
  providers: [
    provideHttpClient(),
    TastyService
  ]
})
export class CoreModule {}
