import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [BrowserModule, FormsModule],
  //FormsModule para utilizar ([ngModel])
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
