import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

import { MARKERS } from '../list-view/list';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  markers = MARKERS;
  myControl = new FormControl();
  filteredMarker: Observable<string[]>;

  displayFn(subject: { name: any; }) {
    this.markers = subject ? subject.name : undefined;
    return this.markers;
  }
  ngOnInit() {
    this.filteredMarker = this.myControl.valueChanges
      .pipe(
        startWith(''),
        tap( value => console.log(value)),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const markerNames  = this.markers.map(marker => marker.name);
    return markerNames.filter(marker => marker.toLowerCase().includes(filterValue));

  }
}
