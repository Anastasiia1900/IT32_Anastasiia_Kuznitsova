import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  newTitle = '';
  newYear: number | null = null;
  newRating: number | null = null;

  constructor(private movieService: MovieService) {}

  get movies() {
    return this.movieService.getMovies();
  }

  addMovie() {
    if (
      this.newTitle.trim() === '' ||
      this.newYear === null ||
      this.newRating === null
    ) {
      return;
    }

    this.movieService.addMovie(
      this.newTitle,
      this.newYear,
      this.newRating
    );

    this.newTitle = '';
    this.newYear = null;
    this.newRating = null;
  }

  removeMovie(id: number) {
    this.movieService.removeMovie(id);
  }
}