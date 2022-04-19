import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataResolver } from "./resolvers/data.resolver";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    resolve: {
      data: DataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
