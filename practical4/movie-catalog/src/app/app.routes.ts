import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Movies } from './pages/movies/movies';
import { MovieDetail } from './pages/movie-detail/movie-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'movies',
    component: Movies
  },
  {
    path: 'movie/:id',
    component: MovieDetail
  }
];