import { Component } from '@angular/core';
import { Router } from '@angular/router';


// ng g c <name>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private router: Router
  ) {

  }

  framework = 'React';
  version = 16

  libs = ['jquery', 'handlebars', 'extjs', 'polymer', 'dojo', 'chartjs', 'plotyjs']
  isVs = true

  dt = new Date()
  amt = 1000

  onContact() {
    this.router.navigate(['/contact', 8666])
  }
}
