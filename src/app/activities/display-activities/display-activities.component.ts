import { Component, Input, Output } from '@angular/core';

import { Activity, ActivityType } from '../../store/models/activity.model';

@Component({
  selector: 'app-display-activities',
  templateUrl: './display-activities.component.html',
  styleUrls: ['./display-activities.component.css'],
})
export class DisplayActivitiesComponent {
  @Input() activities: Activity[] = [];

  toggleFavorite(activityId: number): void {
    this.activities.forEach((activity) => {
      if (activity.id === activityId) {
        activity.favorite = !activity.favorite;
      }
    });
  }
}
