import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from './movies.model';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AlertService } from '../core-features/alert/alert.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  searchText: any;
  searchedMovies: Array<Movie> = [];
  isLoading: boolean = false;
  currentGenre: any;

  constructor(private movieService: MoviesService, private router: Router, private route: ActivatedRoute,
    private alert: AlertService) {

    // router change event is subscribed to get movies based on selected genre
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentGenre = this.route.snapshot.queryParamMap.get('filter');
        if (this.currentGenre) {
          this.getMovies(this.currentGenre);
        } else {
          this.getMovies(this.searchText);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  // this function get movie list from api with search text
  getMovies(searchText: string) {
    this.isLoading = true;
    this.searchedMovies = [];
    this.movieService.getMovies(searchText).subscribe(res => {
      if (res && res.length > 0) {
        this.searchedMovies = res;
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.alert.error('Something went wrong, Please try again!');
      }
    })
  }

}
