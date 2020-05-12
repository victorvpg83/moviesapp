import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search = ''

  constructor( public ms: MoviesService,
               public route: ActivatedRoute ) {

    this.route.params.subscribe( params => {

      if ( params.text ) {
        this.search = params.text
        this.searchMovie()
      }
    })
  }

  ngOnInit(): void {
  }

  searchMovie() {
    if ( this.search.length === 0 ) { return }

    this.ms.searchMovie( this.search )

  }

}
