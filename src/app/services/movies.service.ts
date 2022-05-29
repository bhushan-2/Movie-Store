import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../movies/movies.model';
import { MovieDetail } from '../movies/movie-detail/movie-detail.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  //this api call fetches movie list of searched text
  getMovies(searchText: string = 'all'): Observable<Array<Movie>> {
    return this.http.get(`${environment.apiUrl}/?apikey=${environment.apiKey}&s=${searchText}`)
      .pipe(
        map((res: any) => {
          if (res.Response) { return res.Search }
          else { return [] }
        }
        ), retry(1)
      );
  }

  //this api call fetches movie details of specific movie with imdbID
  getMovieDetails(imdbID: string): Observable<MovieDetail> {
    return this.http.get(`${environment.apiUrl}/?apikey=${environment.apiKey}&i=${imdbID}&plot=full`).pipe(
      map((res: any) => res), retry(1)
    );
  }

}
