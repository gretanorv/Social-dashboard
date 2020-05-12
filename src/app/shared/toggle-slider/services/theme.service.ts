import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSource = new BehaviorSubject<boolean>(false);
  currentTheme = this.themeSource.asObservable();
  isDarkTheme: boolean;

  constructor() {}

  changeTheme(theme: boolean) {
    this.themeSource.next(theme);
  }

  getTheme(tag): void {
    this.currentTheme.subscribe(
      (theme) => ((this.isDarkTheme = theme), this.toggleTheme(tag))
    );
  }

  toggleTheme(tag) {
    if (this.isDarkTheme) {
      tag.classList.add('theme--dark');
    } else {
      tag.classList.remove('theme--dark');
    }
  }
}
