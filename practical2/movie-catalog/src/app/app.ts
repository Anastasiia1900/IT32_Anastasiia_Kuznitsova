import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Movie {
  title: string;
  year: number;
  rating: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  movies: Movie[] = [
    { title: 'Interstellar', year: 2014, rating: 9 },
    { title: 'Avatar', year: 2009, rating: 8 },
    { title: 'Titanic', year: 1997, rating: 7 }
  ];

  newTitle: string = '';
  newYear: number | null = null;
  newRating: number | null = null;

  addMovie(): void {
    if (
      this.newTitle.trim() === '' ||
      this.newYear === null ||
      this.newRating === null
    ) {
      return;
    }

    this.movies.push({
      title: this.newTitle,
      year: this.newYear,
      rating: this.newRating
    });

    this.newTitle = '';
    this.newYear = null;
    this.newRating = null;
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
  }
}