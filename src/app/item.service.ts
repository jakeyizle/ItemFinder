import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item, StatsEntity, Character, Items} from './character/character';
import { Observable, of } from 'rxjs';
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

  constructor(private http: HttpClient, private blizzardService: BlizzardService) { }

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
    items.forEach((item) => {
      var itemRating : number = 0;
      
      statWeights.forEach(statWeight => {
        var statsToSum = item.stats.filter(stats => statWeight.id.indexOf(stats.stat) > -1);
        statsToSum.forEach(statToSum =>{
          itemRating = itemRating + statToSum.amount * statWeight.weight;
        });    
      });
      item.rating = itemRating;
    });
  }

  getUpgradeItems(statWeights:StatWeight[], region: string, realm: string, characterName: string) {
    var character:Character;
    var items:Items;
    var characterItems:Item[];
    var storedItems:Item[];
    var superItemArray: Item[][] = [];
    var itemArray:Item[] = [];

    this.getItems(statWeights).subscribe(items => storedItems = items);
    this.blizzardService.getCharacter(region, realm, characterName)
    .subscribe(blizzCharacter => {
      character=blizzCharacter;
      items=character.items;
      characterItems = Object.values(items);      
      characterItems.splice(0, 2);

      this.assignItemRating(characterItems, statWeights);
      
      characterItems.forEach(characterItem => {
        this.blizzardService.getItem(region, characterItem.id).subscribe(blizzItem => {
          characterItem.inventoryType = blizzItem.inventoryType;
          var betterItems:Item[] = storedItems.filter(item=> item.inventoryType==characterItem.inventoryType && item.rating > characterItem.rating);
          betterItems.forEach(item => {
            item.ratingImprovement = item.rating -characterItem.rating;
            item.ratingimprovementPercent = +(item.ratingImprovement / characterItem.rating).toFixed(2) + "%";
            itemArray.push(item);
          });
          // console.log(betterItems);
          if (betterItems.length > 0) {
            superItemArray.push(betterItems);
          }
        })
      });
      // console.log(characterItems);
    })
    // return of(superItemArray);
    return of(itemArray);
  }

  getZones(statWeights:StatWeight[], region: string, realm: string, characterName: string) {
    var bosses : Boss[];
    var zones : Zone[];
    var items: Item[];
    this.getUpgradeItems(statWeights, region, realm, characterName).subscribe(_items => {
      items = _items;
      this.blizzardService.getZones().subscribe(_zones => {
        zones = _zones;      
        this.blizzardService.getBosses().subscribe(_bosses => {
          bosses = _bosses
          zones.forEach(zone => {
            zone.bosses = bosses.filter(boss => boss.zoneId == zone.id)                        
            zone.bosses.forEach(boss => {
              console.log(items);
                boss.items = items.filter(item => {
                  item.sourceId == boss.id;
                });
                console.log(boss.items);
                console.log(boss);
            });

            let count : number;
            zone.bosses.forEach(boss => count=boss.items.length + count);
            zone.itemCount = count;
          });
        });
      });
    });
    return this.blizzardService.getZonesFromItems(items);
  }
}
