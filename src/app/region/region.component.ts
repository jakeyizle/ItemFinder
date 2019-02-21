import { Component, OnInit } from '@angular/core';
import {Region} from '../region';
import {Realm} from '../realm';
import {RegionService} from '../region.service';
import {BlizzardService} from '../blizzard.service';
import {ItemService} from '../item.service';
import {Items, Item, Character } from '../character/character';
import {StatWeight} from '../statWeight';
import {StatWeightsService} from '../stat-weights.service';
import {Zone} from '../zone/zone';
import {Boss} from '../boss/boss';
import { map, filter, flatMap, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private regionService: RegionService, private blizzardService: BlizzardService, private itemService: ItemService, private statService: StatWeightsService) {}

  regions: Region[];
  realms: Realm[];

  selectedRegion: Region;
  selectedRealm: Realm;
  characterName: string;
  statWeights: StatWeight[];

  storedItems: Item[];
  storedBosses: Boss[];
  storedZones: Zone[];
  zones: Zone[] = [];


  getRegions(): void {
    this.regionService.getRegions()
    .subscribe(regions => this.regions = regions);
  }

  getStatWeights(): void {
    this.statWeights = this.statService.getStatWeights()    
  }

  ngOnInit() {
    this.getRegions();
    this.getStatWeights();
  }

  onSelect(region: Region)
  {
    this.selectedRealm = null;
    
    this.regionService.getRealms()
    .subscribe(realms => this.realms = realms.filter((item) => item.regionID == region.id));
  }

  onClick()
  {
    this.itemService.getData(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName).pipe(filter(zone => zone.itemCount > 0), map(zone => zone))
    .subscribe(zone => {this.zones.push(zone); console.log(zone)});
    // this.storedBosses = this.blizzardService.getBosses();
    // this.storedZones = this.blizzardService.getZones();

    // this.itemService.getUpgradeItems(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName).pipe(flatMap(items => {
    //   var bossIds : number[] = [];
    //   console.log(items);
    //   items.forEach(item => {
    //     console.log(item);
    //     bossIds.push(item.sourceId);
    //   });
    //   this.storedZones= this.storedZones.filter(zone => this.storedBosses.map(x => x.zoneId).indexOf(zone.id) > -1);
    //   return of(items);
    // }))    
    // .subscribe(items => {
    //   this.storedItems = items;
    // });


    // this.blizzardService.getBosses()
    // .subscribe(bosses => {
    //   this.storedBosses = bosses;
    //   console.log(this.storedBosses);
    // });

    // this.blizzardService.getZones()
    // .subscribe(zones => {
    //   this.storedZones = zones;
    //   console.log(this.storedZones);
    // });

    
    // this.itemService.getZones(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName)
    // .subscribe(zones => {
    //   this.zones = zones;
    //   console.log(zones);
    // });
  }
}
