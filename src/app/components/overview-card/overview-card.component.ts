import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewCard } from '../../models/social-stats.model';

@Component({
  selector: 'app-overview-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-card.component.html',
  styleUrl: './overview-card.component.scss'
})
export class OverviewCardComponent {
  @Input() data!: OverviewCard;

  get isPositive(): boolean {
    return this.data.changePercent >= 0;
  }

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

  protected readonly Math = Math;
}
