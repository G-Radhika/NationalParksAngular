import { Component } from '@angular/core';

import { MARKERS } from './../list-view/list';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  // Central lat/lng of US where the map will be centered at start.
  lat = 41.612699;
  lng = -100.903857;
  mapType = 'satellite';

  markers = MARKERS;

  openedWindow = 0; // alternative: array of numbers

  openWindow(id: number) {
    console.log('Opened window id: ', id, this.markers[id - 1].id);
    this.openedWindow = id; // alternative: push to array of numbers
    console.log('Opened window id: ', id, this.markers[id - 1].id);
  }

  isInfoWindowOpen(id: number) {
    //  console.log('info window id: ', id);
    return this.openedWindow === id; // alternative: check if id is in array
  }
}

