import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usd } from './dto';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *  Observable - 3 steped result 
   *  - partial complete
   *  - error
   *  - complete
   * 
   */

  rates(): Observable<object> {
    return this.http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')

    // ->
    // ->
    // ->
    // ->
    // ----------- response ----------
  }

  create(usd: Usd) {
    const url = 'https://reqres.in/api/users'
    const body = usd
    const headers = {

    }
    return this.http.post(url, body, headers)
  }

  errorHandler(err: Error) {
    console.log(err)
  }
}
