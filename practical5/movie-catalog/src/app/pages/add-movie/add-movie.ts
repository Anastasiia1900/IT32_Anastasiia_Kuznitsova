import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {
  private movieService = inject(MovieService);
  private router = inject(Router);

  movie = {
    title: '',
    director: '',
    description: ''
  };

  addMovie(): void {
    this.movieService.addMovie(this.movie);
    this.router.navigate(['/movies']);
  }
}