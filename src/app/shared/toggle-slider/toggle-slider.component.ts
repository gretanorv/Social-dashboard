import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.scss'],
})
export class ToggleSliderComponent implements OnInit {
  isChecked: boolean;
  constructor() {}

  ngOnInit() {
    console.log(this.isChecked);
  }

  checkValue(event: any) {
    console.log(event);
  }
}
