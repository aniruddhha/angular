import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output()
  mySelected = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(it: number) {
    console.log(it)
    this.mySelected.emit(it)
  }
}
