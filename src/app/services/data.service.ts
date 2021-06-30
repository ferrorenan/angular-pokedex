import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  //Get pokemons
  // tslint:disable-next-line:typedef
  getPokemons() {

    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=100`);
  }

  getMoreData(id: string): Observable<any> {

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getMCharacteristics(id: string): Observable<any> {

    return this.http.get(`https://pokeapi.co/api/v2/ability/${id}/`);
  }
}
