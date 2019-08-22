import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {

constructor() { }

  getData() {
    return [
      {
        id: 1, name: 'Acadia', state: 'Maine', s: 'ME', lat: 44.376789, lng: -68.255569,
        url: 'https://en.wikipedia.org/wiki/Acadia_National_Park', area: 49075, yearEST: 1916, visitors: 3537575
      },
      {
        id: 2, name: 'American Samoa', state: 'American Samoa', s: 'AS', lat: -14.261944, lng: -170.688056,
        url: 'https://en.wikipedia.org/wiki/National_Park_of_American_Samoa', area: 13500, yearEST: 1988, visitors: 28626
      },
      {
        id: 3, name: 'Arches', state: 'Utah', s: 'UT', lat: 38.637291, lng: -109.600533,
        url: 'https://en.wikipedia.org/wiki/Arches_National_Park', area: 76679, yearEST: 1929, visitors: 1663557
      },
      {
        id: 4, name: 'Badlands', state: 'South Dakota', s: 'SD', lat: 43.907810, lng: -102.332787,
        url: 'https://en.wikipedia.org/wiki/Badlands_National_Park', area: 242756, yearEST: 1978, visitors: 1008942
      },
      {
        id: 5, name: 'Big Bend', state: 'Texas', s: 'TX', lat: 29.334591, lng: -103.256577,
        url: 'https://en.wikipedia.org/wiki/Big_Bend_National_Park', area: 801163, yearEST: 1944, visitors: 440091
      },
      {
        id: 6, name: 'Biscayne', state: 'Florida', s: 'FL', lat: 25.503122, lng: -80.234848,
        url: 'https://en.wikipedia.org/wiki/Biscayne_National_Park', area: 172971, yearEST: 1980, visitors: 469253
      },
      {
        id: 7, name: 'Black Canyon of the Gunnison', state: 'Colorado', s: 'CO', lat: 38.568489, lng: -107.732788,
        url: 'https://en.wikipedia.org/wiki/Black_Canyon_of_the_Gunnison_National_Park', area: 30780, yearEST: 1999, visitors: 308962
      },
      {
        id: 8, name: 'Bryce Canyon', state: 'Utah', s: 'UT', lat: 37.627361, lng: -112.185257,
        url: 'https://en.wikipedia.org/wiki/Bryce_Canyon_National_Park', area: 35835, yearEST: 1928, visitors: 2679478
      },
      {
        id: 9, name: 'Canyonlands', state: 'Utah', s: 'UT', lat: 37.903358, lng: -110.360588,
        url: 'https://en.wikipedia.org/wiki/Canyonlands_National_Park', area: 337598, yearEST: 1964, visitors: 739449
      },
      {
        id: 10, name: 'Capitol Reef', state: 'Utah', s: 'UT', lat: 37.827221, lng: -111.079720,
        url: 'https://en.wikipedia.org/wiki/Capitol_Reef_National_Park', area: 241905, yearEST: 1971, visitors: 1227627
      },
      {
        id: 11, name: 'Carlsbad Caverns', state: 'New Mexico', s: 'NM', lat: 32.723801, lng: -104.089119,
        url: 'https://en.wikipedia.org/wiki/Carlsbad_Caverns_National_Park', area: 46766, yearEST: 1930, visitors: 465912
      },
      {
        id: 12, name: 'Channel Islands', state: 'California', s: 'CA', lat: 33.998610, lng: -119.858380,
        url: 'https://en.wikipedia.org/wiki/Channel_Islands_National_Park', area: 249561, yearEST: 1980, visitors: 366250
      },
      {
        id: 13, name: 'Congaree', state: 'South Carolina', s: 'SC', lat: 34.023731, lng: -80.990578,
        url: 'https://en.wikipedia.org/wiki/Congaree_National_Park', area: 26640, yearEST: 2003, visitors: 145929
      },
      {
        id: 14, name: 'Crater Lake', state: 'Oregon', s: 'OR', lat: 43.056629, lng: -122.283638,
        url: 'https://en.wikipedia.org/wiki/Crater_Lake_National_Park', area: 183224, yearEST: 1902, visitors: 720659
      },
      {
        id: 15, name: 'Cuyahoga Valley', state: 'Ohio', s: 'OH', lat: -31.625910, lng: 116.214989,
        url: 'https://en.wikipedia.org/wiki/Cuyahoga_Valley_National_Park', area: 32572, yearEST: 2000, visitors: 2096053
      },
      {
        id: 16, name: 'Death Valley', state: 'California, Nevada', s: 'CA & NV', lat: 36.167900, lng: -116.622200,
        url: 'https://en.wikipedia.org/wiki/Death_Valley_National_Park', area: 3372981, yearEST: 1994, visitors: 1678660
      },
      {
        id: 17, name: 'Denali', state: 'Alaska', s: 'AL', lat: 63.114799, lng: -151.192612,
        url: 'https://en.wikipedia.org/wiki/Denali_National_Park_and_Preserve', area: 4740911, yearEST: 1917, visitors: 594660
      },
      {
        id: 18, name: 'Dry Tortugas', state: 'Florida', s: 'FL', lat: 37.067162, lng: -86.076271,
        url: 'https://en.wikipedia.org/wiki/Dry_Tortugas_National_Park', area: 64701, yearEST: 1992, visitors: 56810
      },
      {
        id: 19, name: 'Everglades', state: 'Florida', s: 'FL', lat: 25.180450, lng: -80.791908,
        url: 'https://en.wikipedia.org/wiki/Everglades_National_Park', area: 1508939, yearEST: 1934, visitors: 597124
      },
      {
        id: 20, name: 'Gates of the Arctic', state: 'Alaska', s: 'AL', lat: 36.107128, lng: -79.921532,
        url: 'https://en.wikipedia.org/wiki/Gates_of_the_Arctic_National_Park_and_Preserve', area: 7523897, yearEST: 1980, visitors: 9591
      },
      {
        id: 21, name: 'Gateway Arch', state: 'Missouri', s: 'MO', lat: 30.005301, lng: -102.953011,
        url: 'https://en.wikipedia.org/wiki/Gateway_Arch_National_Park', area: 193, yearEST: 2018, visitors: 2016180
      },
      {
        id: 22, name: 'Glacier', state: 'Montana', s: 'MT', lat: 48.759613, lng: -113.787025,
        url: 'https://en.wikipedia.org/wiki/Glacier_National_Park_(U.S.)', area: 1013126, yearEST: 1910, visitors: 2965309
      },
      {
        id: 23, name: 'Glacier Bay', state: 'Alaska', s: 'AL', lat: 58.455391, lng: -135.768814,
        url: 'https://en.wikipedia.org/wiki/Glacier_Bay_National_Park_and_Preserve', area: 3223383, yearEST: 1980, visitors: 597915
      },
      {
        id: 24, name: 'Grand Canyon', state: 'Arizona', s: 'AR', lat: 58.455391, lng: -135.768814,
        url: 'https://en.wikipedia.org/wiki/Grand_Canyon_National_Park', area: 1201647, yearEST: 1919, visitors: 6380495
      },
      {
        id: 25, name: 'Grand Teton', state: 'Wyoming', s: 'WY', lat: 43.790440, lng: -110.681760,
        url: 'https://en.wikipedia.org/wiki/Grand_Teton_National_Park', area: 310044, yearEST: 1929, visitors: 3491151
      },
      {
        id: 26, name: 'Great Basin', state: 'Nevada', s: 'NV', lat: 38.915135, lng: -114.186903,
        url: 'https://en.wikipedia.org/wiki/Great_Basin_National_Park', area: 77180, yearEST: 1986, visitors: 153094
      },
      {
        id: 27, name: 'Great Sand Dunes', state: 'Colarado', s: 'CO', lat: 37.791187, lng: -105.612267,
        url: 'https://en.wikipedia.org/wiki/Great_Sand_Dunes_National_Park_and_Preserve', area: 107342, yearEST: 2004, visitors: 442905
      },
      {
        id: 28, name: 'Great Smoky Mountains', state: 'Tennessee, North Carolina', s: 'TN & NC', lat: 35.634220, lng: -83.402366,
        url: 'https://en.wikipedia.org/wiki/Great_Smoky_Mountains_National_Park', area: 522427, yearEST: 1934, visitors: 11421200
      },
      {
        id: 29, name: 'Guadalupe Mountains', state: 'Texas', s: 'TX', lat: 31.901079, lng: -104.900832,
        url: 'https://en.wikipedia.org/wiki/Guadalupe_Mountains_National_Park', area: 86367, yearEST: 1966, visitors: 172347
      },
      {
        id: 30, name: 'Haleakalā', state: 'Hawaii', s: 'HI', lat: 20.699133, lng: -156.132430,
        url: 'https://en.wikipedia.org/wiki/Haleakal%C4%81_National_Park', area: 33265, yearEST: 1916, visitors: 1044084
      },
      {
        id: 31, name: 'Hawaiʻi Volcanoes', state: 'Hawaii', s: 'HI', lat: 19.303188, lng: -155.240502,
        url: 'https://en.wikipedia.org/wiki/Hawai%CA%BBi_Volcanoes_National_Park', area: 325605, yearEST: 1916, visitors: 1116891
      },
      {
        id: 32, name: 'Hot Springs', state: 'Arkansas', s: 'AR', lat: 34.518020, lng: -93.052942,
        url: 'https://en.wikipedia.org/wiki/Hot_Springs_National_Park', area: 5552, yearEST: 1921, visitors: 1506887
      },
      {
        id: 33, name: 'Indiana Dunes', state: 'Indiana', s: 'In', lat: 41.615266, lng: -87.207262,
        url: 'https://en.wikipedia.org/wiki/Indiana_Dunes_National_Park', area: 15348, yearEST: 2019, visitors: 1756079
      },
      {
        id: 34, name: 'Isle Royale', state: 'Michigan', s: 'MI', lat: 47.995865, lng: -88.909286,
        url: 'https://en.wikipedia.org/wiki/Isle_Royale_National_Park', area: 571790, yearEST: 1940, visitors: 25798
      },
      {
        id: 35, name: 'Joshua Tree', state: 'California', s: 'CA', lat: 34.072170, lng: -115.517662,
        url: 'https://en.wikipedia.org/wiki/Joshua_Tree_National_Park', area: 790635, yearEST: 1994, visitors: 2942382
      },
      {
        id: 36, name: 'Katmai', state: 'Alaska', s: 'AL', lat: 58.448651, lng: -154.850804,
        url: 'https://en.wikipedia.org/wiki/Katmai_National_Park_and_Preserve', area: 3674529, yearEST: 1980, visitors: 37818
      },
      {
        id: 37, name: 'Kenai Fjords', state: 'Alaska', s: 'AL', lat: 59.815710, lng: -150.108570,
        url: 'https://en.wikipedia.org/wiki/Kenai_Fjords_National_Park', area: 669650, yearEST: 1980, visitors: 321596
      },
      {
        id: 38, name: 'Kings Canyon', state: 'California', s: 'CA', lat: 36.915278, lng: -118.607656,
        url: 'https://en.wikipedia.org/wiki/Kings_Canyon_National_Park', area: 461901, yearEST: 1940, visitors: 699023
      },
      {
        id: 39, name: 'Kobuk Valley', state: 'Alaska', s: 'AL', lat: 67.389823, lng: -159.057432,
        url: 'https://en.wikipedia.org/wiki/Kobuk_Valley_National_Park', area: 1750716, yearEST: 1980, visitors: 14937
      },
      {
        id: 40, name: 'Lake Clark', state: 'Alaska', s: 'AL', lat: 60.547260, lng: -153.248790,
        url: 'https://en.wikipedia.org/wiki/Lake_Clark_National_Park_and_Preserve', area: 2619816, yearEST: 1980, visitors: 14479
      },
      {
        id: 41, name: 'Lassen Volcanic', state: 'California', s: 'CA', lat: 40.491384, lng: -121.404336,
        url: 'https://en.wikipedia.org/wiki/Lassen_Volcanic_National_Park', area: 106589, yearEST: 1916, visitors: 499435
      },
      {
        id: 42, name: 'Mammoth Cave', state: 'Kentucky', s: 'KY', lat: 37.186160, lng: -86.099976,
        url: 'https://en.wikipedia.org/wiki/Mammoth_Cave_National_Park', area: 54011, yearEST: 1941, visitors: 533206
      },
      {
        id: 43, name: 'Mesa Verde', state: 'Colorado', s: 'CO', lat: 37.253777, lng: -108.455597,
        url: 'https://en.wikipedia.org/wiki/Mesa_Verde_National_Park', area: 52485, yearEST: 1906, visitors: 563420
      },
      {
        id: 44, name: 'Mount Rainier', state: 'Washington', s: 'WA', lat: 46.853983, lng: -121.706533,
        url: 'https://en.wikipedia.org/wiki/Mount_Rainier_National_Park', area: 236381, yearEST: 1899, visitors: 1518491
      },
      {
        id: 45, name: 'North Cascades', state: 'Washington', s: 'WA', lat: 48.808348, lng: -121.406215,
        url: 'https://en.wikipedia.org/wiki/North_Cascades_National_Park', area: 504780, yearEST: 1968, visitors: 30085
      },
      {
        id: 46, name: 'Olympic', state: 'Washington', s: 'WA', lat: 47.97, lng: -123.50,
        url: 'https://en.wikipedia.org/wiki/Olympic_National_Park', area: 922649, yearEST: 1938, visitors: 3104455
      },
      {
        id: 47, name: 'Petrified Forest', state: 'Arizona', s: 'AR', lat: 35.07, lng: -109.78,
        url: 'https://en.wikipedia.org/wiki/Petrified_Forest_National_Park', area: 221390, yearEST: 1962, visitors: 644922
      },
      {
        id: 48, name: 'Pinnacles', state: 'California', s: 'CA', lat: 36.48, lng: -121.16,
        url: 'https://en.wikipedia.org/wiki/Pinnacles_National_Park', area: 26685, yearEST: 2013, visitors: 222152
      },
      {
        id: 49, name: 'Redwood', state: 'California', s: 'CA', lat: 41.30, lng: -124.00,
        url: 'https://en.wikipedia.org/wiki/Redwood_National_and_State_Parks', area: 138999, yearEST: 1968, visitors: 482536
      },
      {
        id: 50, name: 'Rocky Mountain', state: 'Colorado', s: 'CO', lat: 40.40, lng: -105.58,
        url: 'https://en.wikipedia.org/wiki/Rocky_Mountain_National_Park', area: 265807, yearEST: 1915, visitors: 4590493
      },
      {
        id: 51, name: 'Saguaro', state: 'Arizona', s: 'AR', lat: 32.25, lng: -110.50,
        url: 'https://en.wikipedia.org/wiki/Saguaro_National_Park', area: 91715, yearEST: 1994, visitors: 957405
      },
      {
        id: 52, name: 'Sequoia', state: 'California', s: 'CA', lat: 36.43, lng: -118.68,
        url: 'https://en.wikipedia.org/wiki/Sequoia_National_Park', area: 404062, yearEST: 1890, visitors: 1229594
      },
      {
        id: 53, name: 'Shenandoah', state: 'Virginia', s: 'VA', lat: 38.53, lng: -78.35,
        url: 'https://en.wikipedia.org/wiki/Shenandoah_National_Park', area: 199223, yearEST: 1935, visitors: 1264880
      },
      {
        id: 54, name: 'Theodore Roosevelt', state: 'North Dakota', s: 'ND', lat: 46.97, lng: -103.45,
        url: 'https://en.wikipedia.org/wiki/Theodore_Roosevelt_National_Park', area: 70446, yearEST: 1978, visitors: 749389
      },
      {
        id: 55, name: 'Virgin Islands', state: 'Virgin Islands', s: 'VI', lat: 18.33, lng: -64.73,
        url: 'https://en.wikipedia.org/wiki/Virgin_Islands_National_Park', area: 14944, yearEST: 1956, visitors: 112287
      },
      {
        id: 56, name: 'Voyageurs', state: 'Minnesota', s: 'MI', lat: 48.50, lng: -92.88,
        url: 'https://en.wikipedia.org/wiki/Voyageurs_National_Park', area: 218200, yearEST: 1971, visitors: 239656
      },
      {
        id: 57, name: 'Wind Cave', state: 'South Dakota', s: 'SD', lat: 43.57, lng: -103.48,
        url: 'https://en.wikipedia.org/wiki/Wind_Cave_National_Park', area: 33970, yearEST: 1903, visitors: 656397
      },
      {
        id: 58, name: 'Wrangell–St.Elias', state: 'Alaska', s: 'AL', lat: 61.00, lng: -142.00,
        url: 'https://en.wikipedia.org/wiki/Wrangell%E2%80%93St._Elias_National_Park_and_Preserve',
        area: 8323146, yearEST: 1980, visitors: 79450
      },
      {
        id: 59, name: 'Yellowstone', state: 'Wyoming, Montana, Idaho', s: 'WY, MO & ID', lat: 44.60, lng: -110.50,
        url: 'https://en.wikipedia.org/wiki/Yellowstone_National_Park', area: 2219790, yearEST: 1872, visitors: 4115000
      },
      {
        id: 60, name: 'Yosemite', state: 'California', s: 'CA', lat: 37.83, lng: -119.50,
        url: 'https://en.wikipedia.org/wiki/Yosemite_National_Park', area: 761747, yearEST: 1890, visitors: 4009436
      },
      {
        id: 61, name: 'Zion', state: 'Utah', s: 'UT', lat: 37.30, lng: -113.05,
        url: 'https://en.wikipedia.org/wiki/Zion_National_Park', area: 147242, yearEST: 1919, visitors: 4320033
      }
    ];
  }
}
