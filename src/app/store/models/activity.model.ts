export interface Activity {
  id: number;
  name: string;
  type: ActivityType;
  img: string;
  favorite?: boolean;
  locality?: string;
  datetime_start?: string;
  datetime_end?: string;
}

export enum ActivityType {
  SPORT = 'Sport',
  CULTURE = 'Culture',
  COMBINATION = 'Combination',
  OTHER = 'Other',
}
