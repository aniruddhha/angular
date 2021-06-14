import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  framework = 'React';
  version = 16

  libs = ['jquery', 'handlebars', 'extjs', 'polymer', 'dojo', 'chartjs', 'plotyjs']
  isVs = true
}
