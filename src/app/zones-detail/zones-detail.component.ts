import { Component, OnInit, Input } from '@angular/core';
import {Zone} from '../zone/zone';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {ItemService} from '../item.service';
import {StatWeight} from '../statWeight';
import { map, filter, flatMap, switchMap, tap } from 'rxjs/operators';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-zones-detail',
  templateUrl: './zones-detail.component.html',
  styleUrls: ['./zones-detail.component.css']
})
export class ZonesDetailComponent implements OnInit {

  @Input() zones: Zone[];
  
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit() {
    if (!this.itemService.hasData())
    {
      this.router.navigate(['']);
    }
    this.zones = [];

    this.itemService.getData()
    .subscribe(zones => {
      this.zones = zones;
      this.zones = this.zones.filter(zone => zone.itemCount > 0);
      this.zones.sort((a, b) => b.itemCount - a.itemCount)
    });
  }

}
