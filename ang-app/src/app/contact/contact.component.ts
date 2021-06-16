import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  address = ''

  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRt.params.subscribe(pr => {
      console.log(pr)
      this.address = pr['addr']
    })
  }
}
