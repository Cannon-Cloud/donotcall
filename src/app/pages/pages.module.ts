import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { NgxTypedJsModule } from "ngx-typed-js";
import { NgParticlesModule } from "ng-particles";
import { CarouselModule } from "ngx-owl-carousel-o";

import { PagesRoutingModule } from "./pages-routing.module";

import { SharedModule } from "../shared/shared.module";
import { Index1Component } from "./index1/index1.component";

import { NotifierModule } from "angular-notifier";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [Index1Component],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    NgxTypedJsModule,
    NgParticlesModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    NotifierModule,
  ],
})
export class PagesModule {}
