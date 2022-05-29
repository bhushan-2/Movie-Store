import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { movieRoutes } from './movies.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ApplicationPipesModule } from '../pipes/pipe.module';
import { CoreFeaturesModule } from '../core-features/core-features.module'


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreFeaturesModule,
    RouterModule.forChild(movieRoutes),
    ApplicationPipesModule
  ],
})
export class MoviesModule { }
