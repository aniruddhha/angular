import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rect-form',
  templateUrl: './rect-form.component.html',
  styleUrls: ['./rect-form.component.css']
})
export class RectFormComponent implements OnInit {

  readonly brdInvalid = '1px solid red'
  readonly brdValid = '1px solid green'

  fg: FormGroup // actual form 

  constructor(
    private fb: FormBuilder // helper class
  ) {
    this.fg = this.fb.group({
      userName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.compose([
        Validators.required, Validators.email
      ])),
      mobile: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      device: this.fb.control('', Validators.required),
      dvType: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  frmSb() {
    console.log(this.fg)
  }

  ctrl(nm: string): FormControl {
    return this.fg.get(nm) as FormControl // recommended approach 
  }
}
