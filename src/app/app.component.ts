// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/header/header.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { SocialCard, OverviewCard } from './models/social-stats.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SocialCardComponent,
    OverviewCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  socialCards: SocialCard[] = [
    {
      platform: 'facebook',
      username: '@nathanf',
      count: 1987,
      label: 'FOLLOWERS',
      todayChange: 12,
      iconColor: '#178ff5'
    },
    {
      platform: 'X',
      username: '@nathanf',
      count: 1044,
      label: 'FOLLOWERS',
      todayChange: 99,
      iconColor: '#1da1f2'
    },
    {
      platform: 'instagram',
      username: '@realnathanf',
      count: 11000,
      label: 'FOLLOWERS',
      todayChange: 1099,
      iconColor: '#df4896'
    },
    {
      platform: 'youtube',
      username: 'Nathan F.',
      count: 8239,
      label: 'SUBSCRIBERS',
      todayChange: -144,
      iconColor: '#c4032b'
    }
  ];

  overviewCards: OverviewCard[] = [
    { platform: 'facebook', metric: 'Page Views', value: 87, changePercent: 3, iconColor: '#178ff5' },
    { platform: 'facebook', metric: 'Likes', value: 52, changePercent: -2, iconColor: '#178ff5' },
    { platform: 'instagram', metric: 'Likes', value: 5462, changePercent: 2257, iconColor: '#df4896' },
    { platform: 'instagram', metric: 'Profile Views', value: '52k', changePercent: 1375, iconColor: '#df4896' },
    { platform: 'X', metric: 'Retweets', value: 117, changePercent: 303, iconColor: '#1da1f2' },
    { platform: 'X', metric: 'Likes', value: 507, changePercent: 553, iconColor: '#1da1f2' },
    { platform: 'youtube', metric: 'Likes', value: 107, changePercent: -19, iconColor: '#c4032b' },
    { platform: 'youtube', metric: 'Total Views', value: 1407, changePercent: -12, iconColor: '#c4032b' }
  ];
}
