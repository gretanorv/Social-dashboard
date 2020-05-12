import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ThemeService } from '../shared/toggle-slider/services/theme.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isDarkTheme: boolean;
  products: any = [];
  bigCardsdata: any = [];
  constructor(
    private theme: ThemeService,
    private el: ElementRef,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.theme.currentTheme.subscribe(
      (theme) => (
        (this.isDarkTheme = theme),
        this.theme.getTheme(this.el.nativeElement.querySelector('div'))
      )
    );

    this.httpClient
      .get('assets/data-source/user-data.json')
      .subscribe((data) => {
        this.products = data;
        this.bigCardsdata = this.products.bigCards;
      });
  }
}
