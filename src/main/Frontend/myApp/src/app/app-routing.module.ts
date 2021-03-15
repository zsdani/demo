import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Animal} from "./class/Animal";
import {AnimalsComponent} from "./animals/animals.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {LoginComponent} from "./login/login.component";
import {ConnectionComponent} from "./connection/connection.component";

const routes: Routes = [
  { path: 'mainpage', component: MainpageComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'connection', component: ConnectionComponent },



];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
