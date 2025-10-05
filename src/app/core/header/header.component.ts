import {Component, inject} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  totalFollowers = 23_004;

  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.isDarkMode;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
