import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { FilterComponent } from "./components/filter/filter.component";
import { SliderFilmsComponent } from "./components/slider-films/slider-films.component";
import { FilmsComponent } from "./components/films/films.component";
import { PromoComponent } from "./components/promo/promo.component";
import { SliderPromoComponent } from "./components/slider-promo/slider-promo.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    SliderFilmsComponent,
    FilmsComponent,
    PromoComponent,
    SliderPromoComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
