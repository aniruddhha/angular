import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ContactComponent } from './contact/contact.component';
import { DtIpComponent } from './dt-ip/dt-ip.component';
import { HomeComponent } from './home/home.component';
import { RectFormComponent } from './rect-form/rect-form.component';
import { TempFromComponent } from './temp-from/temp-from.component';

const routes: Routes = [
  { path: 'bitcoin', component: BitcoinComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact/:addr', component: ContactComponent },
  { path: 'tmp', component: TempFromComponent },
  { path: 'rct', component: RectFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: DtIpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
