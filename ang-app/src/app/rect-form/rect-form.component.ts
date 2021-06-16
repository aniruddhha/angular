import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rect-form',
  templateUrl: './rect-form.component.html',
  styleUrls: ['./rect-form.component.css']
})
export class RectFormComponent implements OnInit {

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      userName: this.fb.control(''),
      email: this.fb.control(''),
      mobile: this.fb.control(''),
      password: this.fb.control(''),
      device: this.fb.control(''),
      dvType: this.fb.control('')
    });
  }

  ngOnInit(): void {

  }

  private initForm() {
    this.fg = this.fb.group({
      usNm: this.fb.control(''),
      email: this.fb.control(''),
      mobile: this.fb.control(''),
      password: this.fb.control(''),
      device: this.fb.control(''),
      dvType: this.fb.control('')
    });
  }

  frmSb() {
    console.log(this.fg)
  }
}
