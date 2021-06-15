import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  bg = "background-color: red"
  clr = ''

  ngOnInit(): void {
  }

  onColor(cl: string) {
    console.log(`On Color Clicked`)
    this.bg = `background-color: ${cl}`
    this.clr = cl
  }
}
