import { Component, OnInit } from '@angular/core';
import {Region} from '../region';
import {Realm} from '../realm';
import {RegionService} from '../region.service';
import {BlizzardService} from '../blizzard.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(private regionService: RegionService, private blizzardService: BlizzardService) { }

  regions: Region[];
  realms: Realm[];
  selectedRegion: Region;
  selectedRealm: Realm;
  characterName: string;

  getRegions(): void {
    this.regionService.getRegions()
    .subscribe(regions => this.regions = regions);
  }

  ngOnInit() {
    this.getRegions();
  }

  onSelect(region: Region)
  {
    this.selectedRealm = null;
    
    this.regionService.getRealms()
    .subscribe(realms => this.realms = realms.filter((item) => item.regionID == region.id));

    console.log('regionID: ' + region.id);
  }

  onClick()
  {
    console.log('click' + this.selectedRegion.name + this.selectedRealm.name + this.characterName);
    this.blizzardService.getCharacter(this.selectedRegion.name, this.selectedRealm.name, this.characterName);
  }
}
