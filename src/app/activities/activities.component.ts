import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addActivity,
  updateActivity,
  deleteActivity,
} from '../store/actions/activity.action';

import { Activity, ActivityType } from '../store/models/activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  constructor(
    private store: Store<{ activities: [] }>,
    private router: Router
  ) {
    this.activities$ = store.select('activities');
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.activities$.subscribe((activities) => {
      console.log(activities);
      if (this.currentRoute === `/activity/sport`) {
        this.title = 'sportives';
        this.filteredActivities = activities.filter(
          (activity: Activity) => activity.type === ActivityType.SPORT
        );
      } else if (this.currentRoute === `/activity/culture`) {
        this.title = 'culturelles';
        this.filteredActivities = activities.filter(
          (activity: Activity) => activity.type === ActivityType.CULTURE
        );
      } else if (this.currentRoute === `/activity/combination`) {
        this.title = 'combinées';
        this.filteredActivities = activities.filter(
          (activity: Activity) => activity.type === ActivityType.COMBINATION
        );
      }
    });
  }

  currentRoute!: string;
  activities$: Observable<any>;
  filteredActivities: Activity[] = [];
  title!: string;

  toggleFavorite(activityId: number): void {
    this.store.dispatch(
      updateActivity({ id: activityId, changes: { favorite: true } })
    );
  }

  deleteActivity(activityId: number): void {
    this.store.dispatch(deleteActivity({ id: activityId }));
  }

  addActivity(activity: any): void {
    this.store.dispatch(addActivity({ activity }));
  }
}
