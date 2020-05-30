import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));

    } catch (error) {
      console.log(error)
    }
  }

  clearItem(key) {
    localStorage.removeItem(key);
  }
}
