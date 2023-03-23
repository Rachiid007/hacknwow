import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css'],
})
export class CreateActivityComponent {
  createActivity = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    geolocation: new FormControl(''),
    datetime: new FormControl(''),
    duration: new FormControl(''),
    description: new FormControl(''),
  });

  availableActivity = [
    { id: 1, name: 'Running' },
    { id: 2, name: 'Cycling' },
    { id: 3, name: 'Swimming' },
  ];

  onSubmit() {
    console.log('yep, I receid it !');
  }
}

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
  OTHER = 'Other',
}
