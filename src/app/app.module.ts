import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TitleComponent } from './title/title.component';

import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    InfoComponent,
    ListViewComponent,
    TitleComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVexZcch2V-69NI8eIhMw8LEhLNFZQrrk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
