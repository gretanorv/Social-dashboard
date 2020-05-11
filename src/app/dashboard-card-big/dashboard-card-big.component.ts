import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ThemeService } from '../shared/toggle-slider/services/theme.service';

@Component({
  selector: 'app-dashboard-card-big',
  templateUrl: './dashboard-card-big.component.html',
  styleUrls: ['./dashboard-card-big.component.scss'],
})
export class DashboardCardBigComponent implements OnInit {
  @Input()
  colorClass: string;
  @Input()
  username: string;
  @Input()
  iconLink: string;
  @Input()
  followersNumber: string;
  @Input()
  followersNumberToday: string;
  @Input()
  statusIconLink: string;
  @Input()
  statusColor: string;
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
