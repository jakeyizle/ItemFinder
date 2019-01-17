import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Realm} from './realm';
import {REALMS} from './mock-realms';
import {Region} from './region';
import {REGIONS} from './mock-regions';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  getRegions(): Observable<Region[]> {
    return of(REGIONS);
  }

  getRealms(): Observable<Realm[]> {
    return of(REALMS);
  }
}
