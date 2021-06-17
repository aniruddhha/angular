import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) // 1 st
export class HeaderService {

  private colors = ['red', 'green', 'blue']

  constructor() { }

  magicColor() {
    const ind = Math.floor(Math.random() * 2) // 0.0 - 0.1 * 2 = complete(r < n)
    return this.colors[ind]
  }
}
