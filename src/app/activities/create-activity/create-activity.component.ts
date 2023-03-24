import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Activity, ActivityType } from '../../store/models/activity.model';

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
    { id: 1, name: ActivityType.SPORT },
    { id: 2, name: ActivityType.CULTURE },
    { id: 3, name: ActivityType.COMBINATION },
    { id: 4, name: ActivityType.OTHER },
  ];

  onSubmit() {
    console.log('yep, I receid it !');
  }
}
