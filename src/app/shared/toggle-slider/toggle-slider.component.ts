import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.scss'],
})
export class ToggleSliderComponent implements OnInit {
  isChecked: boolean;
  constructor(private theme: ThemeService) {}

  ngOnInit() {}

  checkValue(event: any) {
    this.theme.changeTheme(event);
  }
}
