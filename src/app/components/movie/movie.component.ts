import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [],
})
export class MovieComponent implements OnInit {

  movie: any;
  returnTo = ''
  search = ''

  constructor(public ms: MoviesService,
              public route: ActivatedRoute) {

    this.route.params.subscribe( params  => {

      this.returnTo = params.page

      if ( params.search ) {
        this.search = params.search
      }

      this.ms.getMovie( params.id )
        .subscribe( movie => this.movie = movie)

    });
  }

  ngOnInit(): void {}
}
