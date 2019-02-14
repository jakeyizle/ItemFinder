import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item, StatsEntity, Character, Items} from './character/character';
import { Observable, of } from 'rxjs';
import {ITEMS} from './mock-items';
import {STATS} from './mock-statEntities';
import {StatWeight} from './statWeight';
import {BlizzardService} from './blizzard.service';

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
          });
          // console.log(betterItems);
          if (betterItems.length > 0) {
            superItemArray.push(betterItems);
          }
        })
      });
      // console.log(characterItems);
    })
    return of(superItemArray);
  }
}
