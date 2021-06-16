import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  arr = [
    { nm: 'andoid', os: 10 },
    { nm: 'symbian', os: 11 },
    { nm: 'windows', os: 10 },
  ]

  emittedHead = 1
  constructor() { }

  ngOnInit(): void {
    const flArr = this.arr.filter(el => el.nm.includes('a'))
    console.log(flArr)
  }

  onReceive(it: number) {
    this.emittedHead = it
  }
}
