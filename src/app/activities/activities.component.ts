import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  Activity,
  ActivityType,
} from 'src/app/activities/create-activity/create-activity.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  currentRoute!: string;

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  activityInfos(): any {
    if (this.currentRoute === `/activity/sport`) {
      return this.availableSports.filter(
        (sport) => sport.type === ActivityType.SPORT
      );
    } else if (this.currentRoute === `/activity/culture`) {
      return this.availableSports.filter(
        (sport) => sport.type === ActivityType.CULTURE
      );
    }
  }

  toggleFavorite(activityId: number): void {
    this.availableSports.forEach((activity) => {
      if (activity.id === activityId) {
        activity.favorite = !activity.favorite;
      }
    });
  }

  availableSports: Activity[] = [
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
  ];
}
