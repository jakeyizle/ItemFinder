import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './character/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:4200/assets/mock-items.json');
  }
}
