import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ThemeService } from '../shared/toggle-slider/services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isDarkTheme: boolean;
  constructor(private theme: ThemeService, private el: ElementRef) {}

  ngOnInit() {
    this.theme.currentTheme.subscribe(
      (theme) => (
        (this.isDarkTheme = theme),
        this.theme.getTheme(this.el.nativeElement.querySelector('div'))
      )
    );
  }
}
