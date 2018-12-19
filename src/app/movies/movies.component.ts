import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ThemoviedbService } from '../themoviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  movie: Movie = {
    title: 'MovieTestTitle',
    description: 'MovieTestDescription',
    imageurl: 'testMovieImageUrl'
  };

  constructor(private themoviedbService: ThemoviedbService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.themoviedbService.getMovies().subscribe( movies => this.movies = movies);
  }

}
