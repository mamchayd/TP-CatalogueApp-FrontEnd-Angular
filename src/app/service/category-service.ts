import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService{
  constructor(http: HttpClient) {
    super('http://127.0.0.1:5000/api/categories/', http);
  }
}

