import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "src/app/http.service";
import { IData } from "src/data";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: "app-slider-films",
  templateUrl: "./slider-films.component.html",
  styleUrls: ["./slider-films.component.less"],
})
export class SliderFilmsComponent extends SliderComponent implements OnInit {
  items$: BehaviorSubject<IData[]> = this.http.getItems$();
  constructor(private http: HttpService) {
    super();
  }
  override ngOnInit(): void {
    console.log(this.http.getData().subscribe());
  }
}
