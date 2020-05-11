import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSource = new BehaviorSubject<boolean>(false);
  currentTheme = this.themeSource.asObservable();

  constructor() {}

  changeTheme(theme: boolean) {
    this.themeSource.next(theme);
  }
}
