import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionComponent} from './region/region.component';
import {ZonesDetailComponent} from './zones-detail/zones-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/region', pathMatch: 'full'},
  { path: 'region', component: RegionComponent},
  { path: 'zones', component: ZonesDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
