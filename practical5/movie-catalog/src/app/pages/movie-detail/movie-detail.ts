import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  movie = this.movieService.getMovieById(this.id);
}