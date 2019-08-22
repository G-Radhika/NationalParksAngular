import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, BehaviorSubject } from 'rxjs';
const subjectList = new BehaviorSubject(0);

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})


export class ListViewComponent implements OnInit {

  selectedMarker = [];
  public List = [];
  List$: Observable<string[]>;



  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.List = this.dataService.getData();
    console.log(this.List);
  }

  onSelect(list: List): void {
    this.selectedMarker = list;
  }

  getMarkers(): void {
    const List$ = this.dataService.getData();
    List$.subscribe(list => this.LIST = list);
  }

  listItemClicked(list): void {
    this.selectedMarker = list;
    console.log(this.selectedMarker.name);
  }
}
