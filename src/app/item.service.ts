import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item, StatsEntity, Character, Items} from './character/character';
import { Observable, of } from 'rxjs';
import { map, filter, flatMap, switchMap, concatMap, tap, toArray } from 'rxjs/operators';
import {ITEMS} from './mock-items';
import {STATS} from './mock-statEntities';
import {StatWeight} from './statWeight';
import {BlizzardService} from './blizzard.service';
import {Zone} from './zone/zone';
import {Boss} from './boss/boss';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  statWeights: StatWeight[];
  region: string;
  realm: string;
  characterName: string;
  constructor(private http: HttpClient, private blizzardService: BlizzardService) { }

  hasData() {
    if (this.statWeights && this.region && this.realm && this.characterName)
    {
      return true;
    }
    return false;
  }
  assignData(statWeights:StatWeight[], region: string, realm: string, characterName: string) {
    this.statWeights = statWeights;
    this.region = region;
    this.realm = realm;
    this.characterName = characterName;
  }

  getData() : Observable <Zone[]> {
    var statWeights = this.statWeights;
    var region = this.region;
    var realm = this.realm;
    var characterName = this.characterName;
    return this.blizzardService.getZones().pipe(
      switchMap(zones => {
        return this.blizzardService.getBosses().pipe(switchMap(bosses => {
          zones.forEach(zone => 
            zone.bosses = bosses.filter(boss => boss.zoneId == zone.id));
          return of(zones);
        }))
      }),
      concatMap(zones => {
        return this.getItems(statWeights).pipe(concatMap(allItems => {
          return this.blizzardService.getCharacterItems(region, realm, characterName).pipe(
            concatMap(characterItems => {
              characterItems = this.assignItemRating(characterItems, statWeights);
              for(let characterItem of characterItems) {
                var items : Item[] = allItems.filter(item=> (item.rating > characterItem.rating) && (item.inventoryType == characterItem.inventoryType));
                for(let item of items) {
                  item.ratingImprovement = item.rating -characterItem.rating;                  
                  item.ratingimprovementPercent = +(item.ratingImprovement / characterItem.rating).toFixed(2) + "%";
                }
              }
              for(let zone of zones) {
                zone.itemCount = 0;
                for (let boss of zone.bosses) {
                  boss.items = items.filter(item => item.sourceId == boss.id);
                  zone.itemCount = zone.itemCount + boss.items.length;
                }
              }
              return zones;
            }),
            toArray()
          )
          }));        
      })
    )
  }


  getItems(statWeights : StatWeight[]): Observable<Item[]> {
    var items = ITEMS;
    var stats = STATS;

    items.forEach((item) => {
      item.stats = stats.filter(stat => stat.itemId == item.id);      
    });
    this.assignItemRating(items, statWeights);
    return of(items);
  }

  assignItemRating(items:Item[], statWeights:StatWeight[])
  {
    for (let item of items) {
      var itemRating : number = 0;
      
      statWeights.forEach(statWeight => {
        var statsToSum = item.stats.filter(stats => statWeight.id.indexOf(stats.stat) > -1);
        statsToSum.forEach(statToSum =>{
          itemRating = itemRating + statToSum.amount * statWeight.weight;
        });    
      });
      item.rating = itemRating;
    }
    return items;
  }
}
