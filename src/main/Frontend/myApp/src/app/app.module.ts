import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import {HttpClientModule} from "@angular/common/http";
import {AnimalService} from "./Services/animal.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConnectionComponent } from './connection/connection.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    LoginComponent,
    MainpageComponent,
    ConnectionComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,




  ],
  providers: [
    AnimalService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
