import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [HeaderService] --> per component 
})
export class HeaderComponent implements OnInit {


  // private colors = ['red', 'green', 'blue']

  // component -> present -> ui
  // pipe -> format -> ui
  // service -> process -> background

  constructor(
    private magic: HeaderService // -> DI 
  ) { }

  bg = "background-color: red"
  clr = ''

  ngOnInit(): void {
  }

  onColor(cl: string) {
    console.log(`On Color Clicked`)
    this.bg = `background-color: ${cl}`
    this.clr = cl
  }

  onMagic() {
    this.bg = this.magic.magicColor()
  }

  // magicColor() {
  //   const ind = Math.floor(Math.random() * 2) // 0.0 - 0.1 * 2 = complete(r < n)
  //   return this.colors[ind]
  // }
}
