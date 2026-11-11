import { Injectable, signal } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Interstellar',
      year: 2014,
      rating: 9
    },
    {
      id: 2,
      title: 'Avatar',
      year: 2009,
      rating: 8
    },
    {
      id: 3,
      title: 'Titanic',
      year: 1997,
      rating: 7
    }
  ]);

  getMovies() {
    return this.movies;
  }

  addMovie(title: string, year: number, rating: number) {
    const newMovie: Movie = {
      id: Date.now(),
      title: title,
      year: year,
      rating: rating
    };

    this.movies.update(movies => [...movies, newMovie]);
  }

  removeMovie(id: number) {
    this.movies.update(movies =>
      movies.filter(movie => movie.id !== id)
    );
  }
}