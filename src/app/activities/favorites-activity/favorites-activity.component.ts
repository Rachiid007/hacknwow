import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/store/models/activity.model';
import {
  addActivity,
  updateActivity,
  deleteActivity,
} from '../../store/actions/activity.action';

@Component({
  selector: 'app-favorites-activity',
  templateUrl: './favorites-activity.component.html',
  styleUrls: ['./favorites-activity.component.css'],
})
export class FavoritesActivityComponent {
  activities$: Observable<any>;
  favoriteActivities: Activity[] = [];

  constructor(private store: Store<{ activities: [] }>) {
    this.activities$ = store.select('activities');
  }

  ngOnInit(): void {
    this.activities$.subscribe((activities) => {
      this.favoriteActivities = activities.filter(
        (activity: Activity) => activity.favorite
      );
    });
  }

  toggleFavorite(activityId: number): void {
    this.activities$.subscribe((activities) => {
      const activity = activities.find(
        (activity: any) => activity.id === activityId
      );
      if (activity.favorite) {
        this.store.dispatch(
          updateActivity({ id: activityId, changes: { favorite: false } })
        );
      } else {
        this.store.dispatch(
          updateActivity({ id: activityId, changes: { favorite: true } })
        );
      }
    });
  }

  deleteActivity(activityId: number): void {
    this.store.dispatch(deleteActivity({ id: activityId }));
  }

  addActivity(activity: any): void {
    this.store.dispatch(addActivity({ activity }));
  }
}
