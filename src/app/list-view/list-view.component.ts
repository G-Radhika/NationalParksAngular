import { Component, OnInit } from '@angular/core';
import { Marker } from './marker';
import { MARKERS } from './list';
import { MessageService } from './message.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  markers = MARKERS;
  selectedMarker: Marker;

  constructor(private messageService: MessageService) {}

  ngOnInit() { }

  listItemClicked(marker: Marker): void {
    this.selectedMarker = marker;
    console.log(this.selectedMarker.name);
  }
}
