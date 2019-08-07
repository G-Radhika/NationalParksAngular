import { Component, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat = 37.865101;
  lng = -119.538330;
  zoom: number;
  mapType = 'satellite';
}
