import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import {API, IBearerToken, Locale, IResultFunction} from './API';
import { Wow } from './wow';
import { Character, Items, Item } from './character/character';
import {HttpClient} from '@angular/common/http';
import * as request from 'request-promise';

declare var require: any

@Injectable({
  providedIn: 'root'
})
export class BlizzardService {

  key = "94ba1f222c7b40a5b9dc009527df9de0"
  secret = "8jE8d4fakM2TvVNYTUiabNlCfuwsvcbT"
  locale = Locale.American;
  characterData: Character;
  token: IBearerToken
  constructor(private http: HttpClient) {     
    this.getToken();
  }

  getToken() {
    request.get(`https://us.battle.net/oauth/token?client_id=${this.key}&client_secret=${this.secret}&grant_type=client_credentials`)
    .then(JSON.parse)
    .then(body => {
        this.token = {
            identifier: body.access_token,
            type: body.token_type,
            expires_in: body.expires_in,
            scope: body.scope
        }
      });
  }

  getCharacter(region: string, realm: string, characterName: string): Observable<Character> {
    let url = `https://${region}.api.blizzard.com/wow/character/${realm}/${characterName}?fields=items&locale=en_US&access_token=${this.token.identifier}`;
    return this.http.get<Character>(url);
}
  getItem(region: string, itemId:number) : Observable<Item>{
    let url = `https://${region}.api.blizzard.com/wow/item/${itemId}?locale=en_US&access_token=${this.token.identifier}`;
    return this.http.get<Item>(url);
  }
}