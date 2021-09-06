import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "primeng/api";

import { NgModule } from "@angular/core";

import { MatFormFieldModule } from "@angular/material/form-field";

import { DoNotCallService } from "./donotcall.service";

// import { UxModule } from "./ux.module";

import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NotifierModule } from "angular-notifier";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,
    // UxModule,
  ],
  providers: [DoNotCallService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
