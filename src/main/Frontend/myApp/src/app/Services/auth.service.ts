import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";



export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
