import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {} from '../dashboard-card-big/dashboard-card-big.component';
import { ThemeService } from '../shared/toggle-slider/services/theme.service';

@Component({
  selector: 'app-dashboard-card-small',
  templateUrl: './dashboard-card-small.component.html',
  styleUrls: [
    './dashboard-card-small.component.scss',
    '../dashboard-card-big/dashboard-card-big.component.scss',
  ],
})
export class DashboardCardSmallComponent implements OnInit {
  @Input()
  cardTitle: string;
  @Input()
  iconLink: string;
  @Input()
  followersNumber: string;
  @Input()
  statusIconLink: string;
  @Input()
  statusColor: string;
  @Input()
  followersPercentage: string;
  isDarkTheme: boolean;

  constructor(private theme: ThemeService, private el: ElementRef) {}

  ngOnInit(): void {
    this.theme.currentTheme.subscribe(
      (theme) => (
        (this.isDarkTheme = theme),
        this.theme.getTheme(this.el.nativeElement.querySelector('div'))
      )
    );
  }
}
