import { Component, ElementRef, OnInit } from "@angular/core";
import { BehaviorSubject, interval, take, timeout } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import { IData, IDataArr } from "src/data";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: "app-slider-promo",
  templateUrl: "./slider-promo.component.html",
  styleUrls: ["../slider/slider.component.less"],
})
export class SliderPromoComponent extends SliderComponent implements OnInit {
  items$: BehaviorSubject<IData> = this.http.getItems$();
  override data: IDataArr[] = this.items$.getValue().promo;

  constructor(private http: HttpService, private hostElement: ElementRef) {
    super();
  }

  override ngOnInit(): void {}
}
