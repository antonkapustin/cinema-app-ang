import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FilterComponent } from './components/filter/filter.component';
import { SliderFilmsComponent } from './components/slider-films/slider-films.component';
import { FilmsComponent } from './components/films/films.component';

@NgModule({
  declarations: [
    HomeComponent,
    FilterComponent,
    SliderFilmsComponent,
    FilmsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
