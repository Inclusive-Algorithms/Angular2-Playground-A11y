import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {IMonster} from "../models/monster.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class A11yMonsters {

  private API_ENDPOINT = 'http://localhost:4000';

  constructor(private http:Http) {
  }

  getMonsters():Observable<IMonster[]> {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
    .map(res => res.json().items);
  }

}