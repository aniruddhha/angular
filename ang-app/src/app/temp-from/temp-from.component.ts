import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-from',
  templateUrl: './temp-from.component.html',
  styleUrls: ['./temp-from.component.css']
})
export class TempFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  frmSub(frm: NgForm) {
    console.log(frm)
    console.log(`Form Submitted`)
  }
}
