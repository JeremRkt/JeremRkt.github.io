export interface SocialCard {
  platform: 'facebook' | 'X' | 'instagram' | 'youtube';
  username: string;
  count: number;
  label: string;
  todayChange: number;
  iconColor: string;
}

export interface OverviewCard {
  platform: 'facebook' | 'X' | 'instagram' | 'youtube';
  metric: string;
  value: number | string;
  changePercent: number;
  iconColor: string;
}
