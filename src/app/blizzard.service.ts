import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import {API, IBearerToken, Locale} from './API';
import { Wow } from './wow';
import { Character } from './character/character';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class BlizzardService {

  key = "94ba1f222c7b40a5b9dc009527df9de0"
  secret = "8jE8d4fakM2TvVNYTUiabNlCfuwsvcbT"
  locale = Locale.American;
  constructor() { }

  getCharacter(region: string, realm: string, characterName: string) {
    const api = new API(this.key, this.secret, (error, token) => {
      const characterProfile = new Wow.CharacterProfile(token);
      characterProfile.getItems(region, realm, characterName, this.locale)
      .then((data) => {
        console.log(data);
        var player = new Character();
        Object.assign(player, data);
      })
      .catch((ex) => {
      });
    })
  }
}
