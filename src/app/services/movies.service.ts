import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = '918ff079c7eef0842231f1f5063c9816'
  private urlTmdb = 'https://api.themoviedb.org/3'

  movies: any[] = []

  constructor( private http: HttpClient ) { }

  getTheatres() {
    const from = new Date()
    const to = new Date()
    to.setDate( to.getDate() + 7 )

    const fromStr = `${ from.getFullYear() }-${ from.getMonth() }-${ from.getDay() }`
    const toStr = `${ to.getFullYear() }-${ to.getMonth() }-${ to.getDay() }`

    const url = `${ this.urlTmdb }/discover/movie?primary_release_date.gte=${ fromStr }&primary_release_date.lte=${ toStr }&api_key=${ this.apiKey }&language=es`

    return this.http.get( url )
  }

  getPopular() {

    const url = `${ this.urlTmdb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`

    return this.http.get( url )

  }
  getScifi() {

    const url = `${ this.urlTmdb }/discover/movie?with_genres=878&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`

    return this.http.get( url )

  }

  getBest19() {

    const url = `${ this.urlTmdb }/discover/movie?primary_release_year=2019&sort_by=vote_average.desc&api_key=${ this.apiKey }&language=es`

    return this.http.get( url )

  }

  searchMovie( text ) {
    const url = `${ this.urlTmdb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`

    return this.http.get( url )
      .subscribe( (response: any) => {
        this.movies = response.results
        console.log(this.movies)
      } )

  }

  getMovie( id: string ) {

    const url = `${ this.urlTmdb }/movie/${ id }?api_key=${ this.apiKey }&language=es`

    return this.http.get( url )

  }

}
