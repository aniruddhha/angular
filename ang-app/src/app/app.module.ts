import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DtIpComponent } from './dt-ip/dt-ip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TempFromComponent } from './temp-from/temp-from.component';
import { RectFormComponent } from './rect-form/rect-form.component';
import { MenuComponent } from './home/menu/menu.component';
import { MainComponent } from './home/main/main.component';
import { HeaderService } from './header/header.service';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DtIpComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TempFromComponent,
    RectFormComponent,
    MenuComponent,
    MainComponent,
    BitcoinComponent
    //components
    //pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for template driven forms
    ReactiveFormsModule, // reactive or data driven forms
    HttpClientModule
    //import thirdparty modueles
  ],
  providers: [
    //import services
    // HeaderService // --- per module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
