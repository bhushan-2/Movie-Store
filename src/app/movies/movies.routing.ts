import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies.component';

export const movieRoutes: Routes = [
    { path: '', component: MoviesComponent, },
    { path: ':id/:filter', component: MovieDetailComponent }
  ];