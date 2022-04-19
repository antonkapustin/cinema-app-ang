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
  override data: IDataArr[] = this.items$.getValue().films;
  current = 0;
  items = 3;
  value = 1;

  constructor(private http: HttpService) {
    super();
  }
  override ngOnInit(): void {
    this.slidShow(this.current, this.items);
    console.log(this.data);
  }

  private slidShow(start: number, items: number): IDataArr[] {
    this.current = start;
    let end = start + items;
    let showItem = this.data.slice(this.current, end);
    showItem[1]["active"] = "slider__img_active";

    return showItem;
  }
}
