import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  popular: any
  kids: any
  best19: any

  constructor( public ms: MoviesService ) {
    this.ms.getPopular()
      .subscribe( (response: any) => this.popular = response.results )

    this.ms.getScifi()
      .subscribe( (response: any) => this.kids = response.results )

    this.ms.getBest19()
      .subscribe( (response: any) => this.best19 = response.results )
  }

  ngOnInit(): void {
  }


}
