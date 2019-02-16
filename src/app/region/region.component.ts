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
  characterItems: Character;
  items: Items;
  itemArray: Item[];
  storedItems: Item[];
  statWeights: StatWeight[];
  ultimateItems: Item[][];
  zones: Zone[];


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
    // this.itemService.getUpgradeItems(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName)
    // .subscribe(items => {
    //   this.ultimateItems = items;
    //   console.log(this.ultimateItems);
    // });

    // this.itemService.getUpgradeItems(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName)
    // .subscribe(items => { this.storedItems = items});

    this.itemService.getZones(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName)
    .subscribe(zones => {
      this.zones = zones;
      console.log(zones);
    });

    // this.blizzardService.getCharacter(this.selectedRegion.name, this.selectedRealm.name, this.characterName)
    // .subscribe(items => {this.characterItems = items; this.items = this.characterItems.items; this.itemArray = Object.values(this.items);}); 

    // this.itemService.getItems(this.statWeights)
    // .subscribe(items => this.storedItems = items);
  }
}
