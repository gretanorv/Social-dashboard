import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardCardBigComponent } from './dashboard-card-big/dashboard-card-big.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCardComponent,
    DashboardCardBigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
