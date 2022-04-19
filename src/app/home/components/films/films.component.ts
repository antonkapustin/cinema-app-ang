import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class FilmsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
