import { createAction, props } from '@ngrx/store';
import { Activity } from '../models/activity.model';

export const addActivity = createAction(
  '[Activity] Add Activity',
  props<{ activity: Activity }>()
);

export const updateActivity = createAction(
  '[Activity] Update Activity',
  props<{ id: number; changes: Partial<Activity> }>()
);

export const deleteActivity = createAction(
  '[Activity] Delete Activity',
  props<{ id: number }>()
);
