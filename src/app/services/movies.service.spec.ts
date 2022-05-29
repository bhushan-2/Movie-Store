import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { Movie } from '../movies/movies.model';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../movies/movie-detail/movie-detail.model';


describe('MoviesService', () => {
  let service: MoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return movies", () => {
    let movies: Movie[] = [];
    let mockResult:any = []
    const baseUrl = `${environment.apiUrl}/?apikey=${environment.apiKey}&s=All`;
    service.getMovies('All').subscribe(res => {
      movies = res;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });
    req.flush(mockResult);
    expect(movies).toEqual(mockResult);
  });

  it("should return movie details", () => {
    let movieDetails: MovieDetail = {} as MovieDetail;
    let mockResult:any = {};
    const imdbID = '1234';
    const baseUrl = `${environment.apiUrl}/?apikey=${environment.apiKey}&i=${imdbID}&plot=full`;
    service.getMovieDetails(imdbID).subscribe(res => {
      movieDetails = res;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });
    req.flush(mockResult);
    expect(movieDetails).toEqual(mockResult);
  });

});
