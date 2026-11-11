import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {

  movie = {
    title: '',
    director: '',
    description: ''
  };

  movies: {
    title: string;
    director: string;
    description: string;
  }[] = [];

  addMovie(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.movies.push({ ...this.movie });

    form.resetForm();

  }
}