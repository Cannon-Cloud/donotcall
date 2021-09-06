import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Index1Component } from "./index1/index1.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full",
  },
  {
    path: "index",
    component: Index1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
