import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Marker } from './marker';
import { MARKERS } from './list';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ListService {

constructor(private messageService: MessageService) {  }
getPlaces(): Observable<Marker[]> {

  // TODO: send the message _after_ fetching the place
  this.messageService.add('ListService: fetched places');
  return of(MARKERS);
}


}
