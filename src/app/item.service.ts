import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item, StatsEntity} from './character/character';
import { Observable, of } from 'rxjs';
import {ITEMS} from './mock-items';
import {STATS} from './mock-statEntities';
import {StatWeight} from './statWeight';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(statWeights : StatWeight[]): Observable<Item[]> {
    var items = ITEMS;
    var stats = STATS;
    items.forEach((item) => {
      item.stats = stats.filter(stat => stat.itemId == item.id);
    });
    return of(items);
  }
}
