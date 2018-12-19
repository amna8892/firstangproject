import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/tvshows', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvshows', component: TvshowsComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'tvshow/:id', component: TvshowDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
