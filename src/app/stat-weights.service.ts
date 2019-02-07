import { Injectable } from '@angular/core';
import {StatWeight} from './statWeight';
@Injectable({
  providedIn: 'root'
})
export class StatWeightsService {

  constructor() { }

  // statWeights : StatWeight[]

  getStatWeights() : StatWeight[] {
    var mainStatWeight = new StatWeight([3,4,5,71,72,73,74], "Main Stat");
    var critWeight = new StatWeight([32], "Critical Strike");
    var hasteWeight = new StatWeight([36], "Haste");
    var masteryWeight = new StatWeight([49], "Mastery");
    var versatilityWeight = new StatWeight([40], "Versatility");
    var statWeights = [mainStatWeight, critWeight, hasteWeight, masteryWeight, versatilityWeight];
    // this.statWeights[0] = mainStatWeight;
    // this.statWeights[1] = critWeight;
    // this.statWeights[2] = hasteWeight;
    // this.statWeights[3] = masteryWeight;
    // this.statWeights[4] = versatilityWeight;
    return statWeights;
  }  
}
