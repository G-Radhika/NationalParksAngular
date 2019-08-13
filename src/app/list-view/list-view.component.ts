import { Component, OnInit } from '@angular/core';
import { MARKERS } from './list';
import { Marker } from './marker';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  markers = MARKERS;
  selectedMarker: Marker;

  constructor() { }

  ngOnInit() { }

  listItemClicked(marker: Marker): void {
    this.selectedMarker = marker;
    console.log(this.selectedMarker.name);
  }

}
