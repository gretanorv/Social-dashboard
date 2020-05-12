import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-today-progress',
  templateUrl: './dashboard-today-progress.component.html',
  styleUrls: ['./dashboard-today-progress.component.scss'],
})
export class DashboardTodayProgressComponent implements OnInit {
  products: any = [];
  smallCardsdata: any = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/data-source/user-data.json')
      .subscribe((data) => {
        this.products = data;
        this.smallCardsdata = this.products.smallCards;
      });
  }
}
