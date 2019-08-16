import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MARKERS } from '../list-view/list';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  markers = MARKERS;
  myControl = new FormControl();
  Places: string[] = [];

  populatePlace() {
    this.markers.forEach(marker => {
      this.Places.push(marker.name);
    });
  }
  constructor() {}

}
