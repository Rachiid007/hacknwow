import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { CreateActivityComponent } from './activities/create-activity/create-activity.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FavoritesActivityComponent } from './activities/favorites-activity/favorites-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateActivityComponent,
    PageNotFoundComponent,
    MapsComponent,
    HomeComponent,
    GroupComponent,
    ActivitiesComponent,
    FavoritesActivityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,

    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
