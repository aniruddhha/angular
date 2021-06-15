import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DtIpComponent } from './dt-ip/dt-ip.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DtIpComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
    //components
    //pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //import thirdparty modueles
  ],
  providers: [
    //import services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
