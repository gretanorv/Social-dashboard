import { Component, OnInit, Input } from '@angular/core';
import { } from '../dashboard-card-big/dashboard-card-big.component'

@Component({
  selector: 'app-dashboard-card-small',
  templateUrl: './dashboard-card-small.component.html',
  styleUrls: ['./dashboard-card-small.component.scss',
    '../dashboard-card-big/dashboard-card-big.component.scss']
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

  constructor() { }

  ngOnInit(): void {
  }

}
