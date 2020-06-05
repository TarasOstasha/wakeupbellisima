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

  register(userData) {
    return this.http.post(url + 'register', userData, httpOptions).toPromise();
  }

  login(userData) {
    return this.http.post( url + 'login', userData, httpOptions ).toPromise();
  }

  logOut() {
    return this.http.get( url + 'log-out' ).toPromise();
  }

  upload(obj) {
    return this.http.post(url + 'upload2', obj, httpOptions).toPromise();
  }

  addNewFileToJson(fileName) {
    return this.http.post(url + 'add-new-file-to-json', {fileName}, httpOptions).toPromise();
  }

  deleteFromJson(item) {
    console.log(item, 'item from api')
    return this.http.get( url + 'deleteItem', item ).toPromise();
  }

  removeImg(name) {
    return this.http.delete( url + `delete-img/${name}` ).toPromise();
  }

  move(index, direction) {
    this.http.post( url + 'move', {index, direction}, httpOptions ).toPromise();
  }
  // about me
  contactsMail(mail) {
    return this.http.post(url + 'contacts-mail', mail, httpOptions).toPromise();
  }

  // slideLeft() {
  //   return this.http.get(url + 'left').toPromise();
  // }

  // pickedImg(file) {
  //   console.log(file, 'file from api')
  //   return this.http.post( url + 'upload-img', file, {
  //     reportProgress: true,
  //     observe: 'events'
  //   } ).toPromise();
  //}
  
}
