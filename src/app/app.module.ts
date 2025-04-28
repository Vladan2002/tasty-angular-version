import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
