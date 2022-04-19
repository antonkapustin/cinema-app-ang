import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-slider-films',
  templateUrl: './slider-films.component.html',
  styleUrls: ['./slider-films.component.less'],
})
export class SliderFilmsComponent extends SliderComponent {
  constructor() {
    super();
  }
}
