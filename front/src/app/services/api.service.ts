import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  appState  from '../appState';

var url = 'http://localhost/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  appState = appState;

  constructor( private http: HttpClient ) { }

  getPortfolioImgs() {
    return this.http.get( url + 'portfolio-imgs' ).toPromise();
  }
}
