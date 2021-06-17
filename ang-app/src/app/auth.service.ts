import { Injectable } from '@angular/core';

//ng g s <name>
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    return true
  }
}
