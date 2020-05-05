import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card-big',
  templateUrl: './dashboard-card-big.component.html',
  styleUrls: ['./dashboard-card-big.component.scss']
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
  numberOfFolowers: string;
  @Input()
  progressIcon: string;
  @Input()
  statusIconLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
