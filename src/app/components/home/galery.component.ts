import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: []
})
export class GaleryComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('movies') movies
  // tslint:disable-next-line: no-input-rename
  @Input('title') title
  // tslint:disable-next-line: no-input-rename
  @Input('best19') best19


  constructor() { }

  ngOnInit(): void {
  }

}
