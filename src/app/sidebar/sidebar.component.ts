import { Component, OnInit } from '@angular/core';
import { Genre } from '../enums/genre.enum';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  genres: any[] = Object.keys(Genre);
  selectedGenre: string = 'All';

  constructor(private router: Router, private route: ActivatedRoute) {

    // router change event is subscribed to get selected genre after page refresh
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const genre = this.route.snapshot.queryParamMap.get('filter');
        if (genre) {
          this.selectedGenre = genre;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  // this function change router query params with selected genre
  changeGenre(genre: string) {
    this.selectedGenre = genre;
    this.router.navigate(['/movies/'], { queryParams: { filter: genre } });
  }

}
