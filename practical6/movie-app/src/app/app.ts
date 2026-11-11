import { Component } from '@angular/core';
import { MovieForm } from './movie-form/movie-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'movie-app';
}