import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCardBigComponent } from './dashboard-card-big/dashboard-card-big.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleSliderComponent } from './shared/toggle-slider/toggle-slider.component';
import { DashboardCardSmallComponent } from './dashboard-card-small/dashboard-card-small.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCardBigComponent,
    DashboardComponent,
    ToggleSliderComponent,
    DashboardCardSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
