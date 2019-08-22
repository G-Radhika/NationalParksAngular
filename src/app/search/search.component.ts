import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { DataService} from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  search = [];
  myControl = new FormControl();
  filteredMarker$: Observable<string[]>;
  filteredList$: Observable<string[]>;
  tmpVal: any;

  displayFn(subject: { name: any; }) {
    this.search = subject ? subject.name : undefined;
    return this.search;
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.search = this.dataService.getData();

    this.filteredMarker$ = this.myControl.valueChanges
      .pipe(
        startWith(''),
        tap(value => console.log(value)),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const markerNames = this.search.map(marker => marker.name);
    // tmpVal contain the filtered values.
    this.tmpVal = markerNames.filter(marker => marker.toLowerCase().includes(filterValue));
    this.filteredList$ = this.tmpVal.valueChanges;
    console.log(this.tmpVal);
    return this.tmpVal;
  }
}
