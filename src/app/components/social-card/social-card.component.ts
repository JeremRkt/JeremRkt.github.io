// components/social-card/social-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialCard } from '../../models/social-stats.model';

@Component({
  selector: 'app-social-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-card.component.html',
  styleUrl: './social-card.component.scss'
})
export class SocialCardComponent {
  @Input() data!: SocialCard;

  readonly Math = Math;

  get platformIcon(): string {
    const icons = {
      facebook: 'assets/icon-facebook.svg',
      twitter: 'assets/icons8-x.svg',
      X: 'assets/icons8-x.svg', // X (ex-Twitter)
      instagram: 'assets/icon-instagram.svg',
      youtube: 'assets/icon-youtube.svg'
    };
    return icons[this.data.platform] || 'assets/favicon-32x32.png'; // icône par défaut
  }

  get isPositive(): boolean {
    return this.data.todayChange >= 0;
  }

  formatCount(count: number): string {
    if (count >= 1000) {
      return (count / 1000).toFixed(0) + 'k';
    }
    return count.toString();
  }
}
