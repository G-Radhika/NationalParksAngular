import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TitleComponent } from './title/title.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule  } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    InfoComponent,
    ListViewComponent,
    TitleComponent,
    MapComponent,
    MenuComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVexZcch2V-69NI8eIhMw8LEhLNFZQrrk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
