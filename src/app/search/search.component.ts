import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { Movie } from '../movie';
 import { Tvshow } from '../tvshow';

 import { ThemoviedbService } from '../themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: Observable<Movie[]>;
  tvshows: Observable<Tvshow[]>;

  private searchTerms = new Subject<string>();

  constructor(private themoviedbService: ThemoviedbService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.movies = this.searchTerms.pipe(      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.themoviedbService.searchMovies(term)),
    );

    this.tvshows = this.searchTerms.pipe(      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.themoviedbService.searchTvshows(term)),
    );
  }

}
