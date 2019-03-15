import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, of, range, forkJoin } from 'rxjs';
import {API, IBearerToken, Locale, IResultFunction} from './API';
import { Wow } from './wow';
import { Character, Items, Item } from './character/character';
import {Zone} from './zone/zone';
import {ZONES} from './zone/mock-zones';
import {Boss} from './boss/boss';
import {BOSSES} from './boss/mock-bosses';
import {HttpClient} from '@angular/common/http';
import * as request from 'request-promise';
import { map, filter, flatMap, concatMap, tap, switchMap, mergeMap, zip, mergeScan, toArray} from 'rxjs/operators';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class BlizzardService {

  key = "94ba1f222c7b40a5b9dc009527df9de0"
  secret = "8jE8d4fakM2TvVNYTUiabNlCfuwsvcbT"
  locale = Locale.American;
  characterData: Character;
  token: IBearerToken
  constructor(private http: HttpClient) {     
    this.getToken();
  }

  getToken() {
    request.get(`https://us.battle.net/oauth/token?client_id=${this.key}&client_secret=${this.secret}&grant_type=client_credentials`)
    .then(JSON.parse)
    .then(body => {
        this.token = {
            identifier: body.access_token,
            type: body.token_type,
            expires_in: body.expires_in,
            scope: body.scope
        }
      });
  }
  
  getCharacterItems(region: string, realm: string, characterName: string) : Observable<Item[]>{
    let url = `https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=items&locale=en_US&access_token=${this.token.identifier}`;
    return this.http.get<Character>(url).pipe(
      flatMap(character => {
        let characterItems : Item[] = Object.values(character.items);      
        characterItems.splice(0, 2);
        return characterItems;
      }),
      mergeMap(item => {
        return this.getItemType(region, item);
      }),
      toArray()
      );
  }

  getItemType(region: string, item : Item) : Observable<Item>{
    let url = `https://${region}.api.blizzard.com/wow/item/${item.id}?locale=en_US&access_token=${this.token.identifier}`;
    return this.http.get<Item>(url).pipe(map(thisItem => {
      item.inventoryType = thisItem.inventoryType;
      return item;
    }));
  }
  
  getZones() : Observable<Zone[]> {
    return of(ZONES);
  }

  getBosses() : Observable<Boss[]> {
    return of(BOSSES);
  }

  // getZonesFromItems(items : Item[]) : Observable<Zone[]> {
  //   var bosses : Boss[];
  //   var zones : Zone[];
  //   this.getZones().subscribe(_zones => {
  //     zones = _zones;      
  //     this.getBosses().subscribe(_bosses => {
  //       bosses = _bosses
  //       bosses.forEach(boss => boss.items = items.filter(item => item.sourceId == boss.id));
  //       zones.forEach(zone => zone.bosses = bosses.filter(boss => boss.zoneId == zone.id));
  //     });
  //   });
  //   return of(zones);
  // }

}