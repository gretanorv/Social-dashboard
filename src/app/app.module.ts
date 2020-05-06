import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardCardBigComponent } from './dashboard-card-big/dashboard-card-big.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToggleSliderComponent } from './shared/toggle-slider/toggle-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCardBigComponent,
    DashboardComponent,
    ToggleSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
