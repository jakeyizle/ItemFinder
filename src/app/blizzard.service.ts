import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import {API, IBearerToken, Locale, IResultFunction} from './API';
import { Wow } from './wow';
import { Character } from './character/character';
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
    // const api = new API(this.key, this.secret, (err, token) => {
    //   const characterProfile = new Wow.CharacterProfile(token);
    //   characterProfile.getItems(region, realm, characterName, this.locale)
    //   .then((data) => {
    //     console.log(data);

    //     this.characterData = <Character>data;              
    //     console.log(this.characterData);
    //     // console.log('characterData' + this.characterData.name)

    //     Object.assign(this.characterData, data);
    //     var doot = this.characterData.items.back.name;
    //     console.log('test' + doot);        
    //   })
    //   .catch((ex) => {
    //   });    
    // });
  }
}
