import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import {HttpClientModule} from "@angular/common/http";
import {AnimalService} from "./Services/animal.service";

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AnimalService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
