import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie';
import { Tvshow } from './tvshow';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  private topRatedMoviesApiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=604b385d8b8ebddf4412a9823c95936d&language=en-US&page=1';
  private topRatedTvshowsApiUrl = 'https://api.themoviedb.org/3/tv/top_rated?api_key=604b385d8b8ebddf4412a9823c95936d&language=en-US&page=1';

  constructor(
    private http: HttpClient
  ) { }

  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.topRatedMoviesApiUrl)
  }

  getTvshows (): Observable<Tvshow[]> {
    return this.http.get<Tvshow[]>(this.topRatedTvshowsApiUrl)
  }

  getMovie(id: number): Observable<Movie>
  {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=604b385d8b8ebddf4412a9823c95936d&language=en-US';
    return this.http.get<Movie>(url);
  }

  getTvShow(id: number): Observable<Tvshow>
  {
    const url = 'https://api.themoviedb.org/3/tv/' + id + '?api_key=604b385d8b8ebddf4412a9823c95936d&language=en-US';
    return this.http.get<Tvshow>(url);
  }

  searchMovies(term: string)
  {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=604b385d8b8ebddf4412a9823c95936d&language=en-US&query=' + term + '&page=1&include_adult=false';
    
    console.log(url);
    return this.http.get<Movie[]>(url);

  }

  searchTvshows(term: string)
  {
    const url = 'https://api.themoviedb.org/3/search/tv?api_key=604b385d8b8ebddf4412a9823c95936d&language=en-US&query=' + term + '&page=1';
    
    console.log(url);

    
    return this.http.get<Movie[]>(url);

  }

}
