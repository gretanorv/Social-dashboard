import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ThemeService } from '../shared/toggle-slider/services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isDarkTheme: boolean;
  constructor(
    private theme: ThemeService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.theme.currentTheme.subscribe(
      (theme) => ((this.isDarkTheme = theme), this.toggleTheme())
    );
  }

  toggleTheme(): void {
    const myTag = this.el.nativeElement.querySelector('div');

    if (this.isDarkTheme) {
      myTag.classList.add('theme--dark');
    } else {
      myTag.classList.remove('theme--dark');
    }
  }
}
