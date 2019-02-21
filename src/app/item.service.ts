import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item, StatsEntity, Character, Items} from './character/character';
import { Observable, of } from 'rxjs';
import { map, filter, flatMap, switchMap, concatMap, tap } from 'rxjs/operators';
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

  // getZonesPlus(statWeights:StatWeight[], region: string, realm: string, characterName: string) {
  //   this.blizzardService.getCharacterItems(region, realm, characterName).pipe(
  //     flatMap(items => {
  //       return of (this.assignItemRating(items, statWeights));      
  //     }).flatMap(allItems => {
  //       return this.getItems(statWeights);
  //     })
  //   );
  // }
  // getUpgradeZones(bosses : Boss[]) : Observable<Zone[]> {
  //   let zoneIds : number[] = bosses.map(x=>x.zoneId);
  //   console.log(bosses);
  //   return of(this.blizzardService.getZones().filter(x=>zoneIds.indexOf(x.id) > -1));

  // }

  // getUpgradeBosses(items : Item[]) : Observable<Boss[]> {
  //   let bossIds : number[] = items.map(x=>x.sourceId);
  //   console.log(items);
  //   return of(this.blizzardService.getBosses().filter(x=>bossIds.indexOf(x.id) > -1));

  // }

  getData(statWeights:StatWeight[], region: string, realm: string, characterName: string) : Observable <Zone[]> {
    return this.blizzardService.getZones().pipe(
      concatMap(zones => {
        return this.blizzardService.getBosses().pipe(concatMap(bosses => {
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
                console.log(characterItem.inventoryType);
                var items : Item[] = allItems.filter(item=> (item.rating > characterItem.rating));
                for(let item of items) {
                  item.ratingImprovement = item.rating -characterItem.rating;                  
                  item.ratingimprovementPercent = +(item.ratingImprovement / characterItem.rating).toFixed(2) + "%";
                }
              }
              for(let zone of zones) {
                for (let boss of zone.bosses) {
                  var itemList : Item[] = [];
                  for (let item of items) {
                    if (item.sourceId == boss.id) {
                      itemList.push(item);                                          
                    }
                  }
                  if (itemList) {
                  zone.itemCount = itemList.length;
                  boss.items = itemList;
                  }
                }
              }
              return of(zones);
            })
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

  getUpgradeItems(statWeights:StatWeight[], region: string, realm: string, characterName: string) : Observable<Item[]> {
    var character:Character;
    var items:Items;
    var characterItems:Item[];
    var storedItems:Item[];
    var superItemArray: Item[][] = [];
    var itemArray:Item[] = [];

    this.getItems(statWeights).pipe(map(items => storedItems = items))


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
    });
    // return of(superItemArray);
    return of(itemArray);
  }

//   getZones(statWeights:StatWeight[], region: string, realm: string, characterName: string) : Observable<Zone[]> {
//     var bosses : Boss[] = this.blizzardService.getBosses();
//     var zones : Zone[] = this.blizzardService.getZones();
//     var items: Item[];
//     this.getUpgradeItems(statWeights, region, realm, characterName).subscribe(_items => {
//     items = _items;
//     bosses.forEach(boss => {
//       console.log(items);

//       items.forEach(item => {
//         boss.items = items;
//         console.log("boss: " + boss.id + " - item:" + item.id);
//         if (item.sourceId == boss.id) 
//         {
//           boss.items.push(item);
//         }                  
//       });
//     });
//     zones.forEach(zone => {
//       zone.bosses = bosses.filter(boss => boss.zoneId == zone.id);                                   
//       let count : number = 0;
//       console.log(bosses);
//       zone.bosses.forEach(boss => count=boss.items.length + count);
//       zone.itemCount = count;
//     });
//   });
//     return of(zones);
//     //return this.blizzardService.getZonesFromItems(items);
//   }
}
