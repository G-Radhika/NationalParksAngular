import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

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

markers: marker[] = [
  {
    lable: '1',
    name: 'Acadia',
    state: 'Maine',
    lat: 44.376789,
    lng: -68.255569
  },
  {
    lable: '2',
    name: 'American Samoa',
    state: 'American Samoa',
    lat: -14.261944,
    lng: -170.688056
  },
  {
    lable: '3',
    name: 'Arches',
    state: 'Utah',
    lat: 38.637291,
    lng: -109.600533
  },
  {
    lable: '4',
    name: 'Badlands',
    state: 'South Dakota',
    lat: 43.907810,
    lng: -102.332787
  },
  {
    lable: '5',
    name: 'Big Bend',
    state: 'Texas',
    lat: 29.334591,
    lng: -103.256577
  },
  {
    lable: '6',
    name: 'Biscayne',
    state: 'Florida',
    lat: 25.503122,
    lng: -80.234848
  },
  {
    lable: '7',
    name: 'Black Canyon of the Gunnison',
    state: 'Colorado',
    lat: 38.568489,
    lng: -107.732788
  },
  {
    lable: '8',
    name: 'Bryce Canyon',
    state: 'Utah',
    lat: 37.627361,
    lng: -112.185257
  },
  {
    lable: '9',
    name: 'Canyonlands',
    state: 'Utah',
    lat: 37.903358,
    lng: -110.360588
  },
  {
    lable: '10',
    name: 'Capitol Reef',
    state: 'Utah',
    lat: 37.827221,
    lng: -111.079720
  },
  {
    lable: '11',
    name: 'Carlsbad Caverns',
    state: 'New Mexico',
    lat: 32.723801,
    lng: -104.089119
  },
  {
    lable: '12',
    name: 'Channel Islands',
    state: 'California',
    lat: 33.998610,
    lng: -119.858380
  },
  {
    lable: '13',
    name: 'Congaree',
    state: 'South Carolina',
    lat: 34.023731,
    lng: -80.990578
  },
  {
    lable: '14',
    name: 'Crater Lake',
    state: 'Oregon',
    lat: 43.056629,
    lng: -122.283638
  },
  {
    lable: '15',
    name: 'Cuyahoga Valley',
    state: 'Ohio',
    lat: -31.625910,
    lng: 116.214989
  },
  {
    lable: '16',
    name: 'Death Valley',
    state: 'California, Nevada',
    lat: 36.167900,
    lng: -116.622200
  },
  {
    lable: '17',
    name: 'Denali',
    state: 'Alaska',
    lat: 63.114799,
    lng: -151.192612
  },
  {
    lable: '18',
    name: 'Dry Tortugas',
    state: 'Florida',
    lat: 37.067162,
    lng: -86.076271
  },
  {
    lable: '19',
    name: 'Everglades',
    state: 'Florida',
    lat: 25.180450,
    lng: -80.791908
  },
  {
    lable: '20',
    name: 'Gates of the Arctic',
    state: 'Alaska',
    lat: 36.107128,
    lng: -79.921532
  },
  {
    lable: '21',
    name: 'Gateway Arch',
    state: 'Missouri',
    lat: 30.005301,
    lng: -102.953011
  },
  {
    lable: '22',
    name: 'Glacier',
    state: 'Montana',
    lat: 48.759613,
    lng: -113.787025
  },
  {
    lable: '23',
    name: 'Glacier Bay',
    state: 'Alaska',
    lat: 58.455391,
    lng: -135.768814
  },
  {
    lable: '24',
    name: 'Grand Canyon',
    state: 'Arizona',
    lat: 58.455391,
    lng: -135.768814
  },
  {
    lable: '25',
    name: 'Grand Teton',
    state: 'Wyoming',
    lat: 43.790440,
    lng: -110.681760
  },
  {
    lable: '26',
    name: 'Great Basin',
    state: 'Nevada',
    lat: 38.915135,
    lng: -114.186903
  },
  {
    lable: '27',
    name: 'Great Sand Dunes',
    state: 'Colarado',
    lat: 37.791187,
    lng: -105.612267
  },
  {
    lable: '28',
    name: 'Great Smoky Mountains',
    state: 'Tennessee, North Carolina',
    lat: 35.634220,
    lng: -83.402366
  },
  {
    lable: '29',
    name: 'Guadalupe Mountains',
    state: 'Texas',
    lat: 31.901079,
    lng: -104.900832
  },
  {
    lable: '30',
    name: 'Haleakalā',
    state: 'Hawaii',
    lat: 20.699133,
    lng: -156.132430
  },
  {
    lable: '31',
    name: 'Hawaiʻi Volcanoes',
    state: 'Hawaii',
    lat: 19.303188,
    lng: -155.240502
  },
  {
    lable: '32',
    name: 'Hot Springs',
    state: 'Arkansas',
    lat: 34.518020,
    lng: -93.052942
  },
  {
    lable: '33',
    name: 'Indiana Dunes',
    state: 'Indiana',
    lat: 41.615266,
    lng: -87.207262
  },
  {
    lable: '34',
    name: 'Isle Royale',
    state: 'Michigan',
    lat: 47.995865,
    lng: -88.909286
  },
  {
    lable: '35',
    name: 'Joshua Tree',
    state: 'California',
    lat: 34.072170,
    lng: -115.517662
  },
  {
    lable: '36',
    name: 'Katmai',
    state: 'Alaska',
    lat: 58.448651,
    lng: -154.850804
  },
  {
    lable: '37',
    name: 'Kenai Fjords',
    state: 'Alaska',
    lat: 59.815710,
    lng: -150.108570
  },
  {
    lable: '38',
    name: 'Kings Canyon',
    state: 'California',
    lat: 36.915278,
    lng: -118.607656
  },
  {
    lable: '39',
    name: 'Kobuk Valley',
    state: 'Alaska',
    lat: 67.389823,
    lng: -159.057432
  },
  {
    lable: '40',
    name: 'Lake Clark',
    state: 'Alaska',
    lat: 60.547260,
    lng: -153.248790
  },
  {
    lable: '41',
    name: 'Lassen Volcanic',
    state: 'California',
    lat: 40.491384,
    lng: -121.404336
  },
  {
    lable: '42',
    name: 'Mammoth Cave',
    state: 'Kentucky',
    lat: 37.186160,
    lng: -86.099976
  },
  {
    lable: '43',
    name: 'Mesa Verde',
    state: 'Colorado',
    lat: 37.253777,
    lng: -108.455597
  },
  {
    lable: '44',
    name: 'Mount Rainier',
    state: 'Washington',
    lat: 46.853983,
    lng: -121.706533
  },
  {
    lable: '45',
    name: 'North Cascades',
    state: 'Washington',
    lat: 48.808348,
    lng: -121.406215
  },
  {
    lable: '46',
    name: 'Olympic',
    state: 'Washington',
    lat: 47.97,
    lng: -123.50
  },
  {
    lable: '47',
    name: 'Petrified Forest',
    state: 'Arizona',
    lat: 35.07,
    lng: -109.78
  },
  {
    lable: '48',
    name: 'Pinnacles',
    state: 'California',
    lat: 36.48,
    lng: -121.16
  },
  {
    lable: '49',
    name: 'Redwood',
    state: 'California',
    lat: 41.30,
    lng: -124.00
  },
  {
    lable: '50',
    name: 'Rocky Mountain',
    state: 'Colorado',
    lat: 40.40,
    lng: -105.58
  },
  {
    lable: '51',
    name: 'Saguaro',
    state: 'Arizona',
    lat: 32.25,
    lng: -110.50
  },
  {
    lable: '52',
    name: 'Sequoia',
    state: 'California',
    lat: 36.43,
    lng: -118.68
  },
  {
    lable: '53',
    name: 'Shenandoah',
    state: 'Virginia',
    lat: 38.53,
    lng: -78.35
  },
  {
    lable: '54',
    name: 'Theodore Roosevelt',
    state: 'North Dakota',
    lat: 46.97,
    lng: -103.45
  },
  {
    lable: '55',
    name: 'Virgin Islands',
    state: 'United States Virgin Islands',
    lat: 18.33,
    lng: -64.73
  },
  {
    lable: '56',
    name: 'Voyageurs',
    state: 'Minnesota',
    lat: 48.50,
    lng: -92.88
  },
  {
    lable: '57',
    name: 'Wind Cave',
    state: 'South Dakota',
    lat: 43.57,
    lng: -103.48
  },
  {
    lable: '58',
    name: 'Wrangell–St.Elias',
    state: 'Alaska',
    lat: 61.00,
    lng: -142.00
  },
  {
    lable: '59',
    name: 'Yellowstone',
    state: 'Wyoming, Montana, Idaho',
    lat: 44.60,
    lng: -110.50
  },
  {
    lable: '60',
    name: 'Yosemite',
    state: 'California',
    lat: 37.83,
    lng: -119.50
  },
  {
    lable: '61',
    name: 'Zion',
    state: 'Utah',
    lat: 37.30,
    lng: -113.05
  }

];
}

// just an interface for type safety.
// tslint:disable-next-line: class-name
interface marker {
  lable?: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
}
