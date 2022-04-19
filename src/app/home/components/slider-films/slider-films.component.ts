import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import { IData, IDataArr } from "src/data";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: "app-slider-films",
  templateUrl: "./slider-films.component.html",
  styleUrls: ["../slider/slider.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class SliderFilmsComponent extends SliderComponent implements OnInit {
  items$: BehaviorSubject<IData> = this.http.getItems$();
  data: IDataArr[] = this.items$.getValue().films;
  constructor(private http: HttpService) {
    super();
  }
  override ngOnInit(): void {
    console.log(this.data);
  }
}
