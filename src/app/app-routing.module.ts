import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateActivityComponent } from 'src/app/activities/create-activity/create-activity.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { MapsComponent } from 'src/app/maps/maps.component';
import { ActivitiesComponent } from 'src/app/activities/activities.component';
import { GroupComponent } from 'src/app/group/group.component';
import { FavoritesActivityComponent } from 'src/app/activities/favorites-activity/favorites-activity.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'activity',
    children: [
      {
        path: 'create',
        component: CreateActivityComponent,
      },
      {
        path: 'sport',
        component: ActivitiesComponent,
      },
      {
        path: 'culture',
        component: ActivitiesComponent,
      },
      {
        path: 'favorites',
        component: FavoritesActivityComponent,
      },
    ],
  },
  {
    path: 'group/:id',
    component: GroupComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
