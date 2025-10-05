// services/theme.service.ts
import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root' // ✅ Important pour l'injection
})
export class ThemeService {
  isDarkMode = signal<boolean>(true);

  constructor() {
    effect(() => {
      this.applyTheme(this.isDarkMode());
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    }
  }

  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean): void {
    document.body.classList.toggle('dark-theme', isDark);
    document.body.classList.toggle('light-theme', !isDark);
  }
}
