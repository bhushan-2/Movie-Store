import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../core-features/alert/alert.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetails: any = {};
  isDetailsLoading: boolean = false;
  movieGenres = [];

  constructor(private movieService: MoviesService, private route: ActivatedRoute,
    private alert: AlertService) { }

  ngOnInit() {
    // this will find imdbID from router params and calls movie details function
    const { id } = this.route.snapshot.params;
    if (id) {
      this.getMovieDetails(id);
    }
  }

  // this function get specific movie details from api using imdbID present in router url
  getMovieDetails(imdbID: string) {
    this.isDetailsLoading = true;
    this.movieService.getMovieDetails(imdbID).subscribe(res => {
      if (res && res.Response) {
        this.movieDetails = res;
        this.movieGenres = this.movieDetails.Genre ? this.movieDetails.Genre.split(',') : [];
        this.isDetailsLoading = false;
      } else {
        this.alert.error('Something went wrong, Please try again!');
      }
    })
  }

}
