import { Component, OnInit, ElementRef } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.scss'],
})
export class ToggleSliderComponent implements OnInit {
  isChecked: boolean;
  isDarkTheme: boolean;
  constructor(private theme: ThemeService, private el: ElementRef) {}

  ngOnInit() {
    this.theme.currentTheme.subscribe(
      (theme) => (
        (this.isDarkTheme = theme),
        this.theme.getTheme(this.el.nativeElement.querySelector('span'))
      )
    );
  }

  checkValue(event: any) {
    this.theme.changeTheme(event);
  }
}
