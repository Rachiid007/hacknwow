import { createReducer, on } from '@ngrx/store';
import {
  addActivity,
  updateActivity,
  deleteActivity,
} from '../actions/activity.action';
import { Activity, ActivityType } from '../models/activity.model';

export const initialState: Activity[] = [
  {
    id: 1,
    name: 'Football',
    type: ActivityType.SPORT,
    img: 'football.svg',
    favorite: false,
  },
  {
    id: 2,
    name: 'Basketball',
    type: ActivityType.SPORT,
    img: 'basketball.svg',
    favorite: true,
  },
  {
    id: 3,
    name: 'Fitness',
    type: ActivityType.SPORT,
    img: 'fitness.svg',
    favorite: false,
  },
  {
    id: 4,
    name: 'Musée 1',
    type: ActivityType.CULTURE,
    img: 'museum.svg',
    favorite: true,
  },
  {
    id: 5,
    name: 'Musée 2',
    type: ActivityType.COMBINATION,
    img: 'museum.svg',
    favorite: false,
  },
  {
    id: 6,
    name: 'Marche 1',
    type: ActivityType.COMBINATION,
    img: 'walk.svg',
    favorite: false,
  },
];

export const activityReducer = createReducer(
  initialState,
  on(addActivity, (state, { activity }) => {
    return [...state, activity];
  }),
  on(updateActivity, (state, { id, changes }) => {
    return state.map((activity) => {
      if (activity.id === id) {
        return { ...activity, ...changes };
      } else {
        return activity;
      }
    });
  }),
  on(deleteActivity, (state, { id }) => {
    return state.filter((activity) => activity.id !== id);
  })
);
