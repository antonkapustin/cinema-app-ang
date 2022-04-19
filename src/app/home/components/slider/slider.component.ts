import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IData, IDataArr } from "src/data";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  data: IDataArr[] = [];
  initialeData: IDataArr[] = [];
  constructor() {}

  ngOnInit(): void {}

  public changeSlides(value: string): void {
    if (value === "prev") {
      const prev = this.initialeData.splice(this.initialeData.length - 1, 1);
      this.initialeData[1]["active"] = "";
      this.initialeData = [...prev, ...this.initialeData];
    } else if (value === "next") {
      const next = this.initialeData.splice(0, 1);
      this.initialeData[0]["active"] = "";
      this.initialeData = [...this.initialeData, ...next];
    }
    this.data = this.initialeData;
  }
}
