import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про космос і подорожі в часі.'
    },
    {
      id: 2,
      title: 'Avatar',
      director: 'James Cameron',
      description: 'Фантастичний фільм про планету Пандора.'
    },
    {
      id: 3,
      title: 'Titanic',
      director: 'James Cameron',
      description: 'Романтична історія кохання на борту Титаніка.'
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  addMovie(movie: Omit<Movie, 'id'>): void {
    const newMovie: Movie = {
      ...movie,
      id: Math.max(0, ...this.movies.map(m => m.id)) + 1
    };

    this.movies.push(newMovie);
  }
}