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
import { ZonesDetailComponent }  from '../zones-detail/zones-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private regionService: RegionService, private itemService: ItemService, private statService: StatWeightsService, private router: Router) {}

  regions: Region[];
  realms: Realm[];

  selectedRegion: Region;
  selectedRealm: Realm;
  characterName: string;
  statWeights: StatWeight[];

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
    this.itemService.assignData(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName);
    this.router.navigate(['/zones']);
    // this.zones = [];

    // this.itemService.getData(this.statWeights, this.selectedRegion.name, this.selectedRealm.name, this.characterName)
    // .subscribe(zones => {
    //   this.zones = zones;
    //   this.zones = this.zones.filter(zone => zone.itemCount > 0);
    //   this.zones.sort((a, b) => b.itemCount - a.itemCount)
    // });
  }
}
