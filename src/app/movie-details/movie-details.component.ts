import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { ThemoviedbService } from '../themoviedb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private themoviedbService: ThemoviedbService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.themoviedbService.getMovie(id).subscribe( movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }
  
}
