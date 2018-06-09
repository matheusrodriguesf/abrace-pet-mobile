import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../config';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getAll() {
    return new Promise(resolve => {
      this.http.get(API_URL + 'animais').subscribe(data => {
        resolve(data);
      }, error => {
        console.log('Error', error);
      });
    });
  }




}
