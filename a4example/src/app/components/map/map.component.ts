import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  sty: any [];
  userobj: Users;
  markers: marker []= [
    {
      lat: 51.673858,
      lng: 7.815982
    },
    {
      lat: 51.373858,
      lng: 7.215982
    },
    {
      lat: 51.723858,
      lng: 7.895982
    }
  ]

  constructor(private dataservies: DataService) { }

  ngOnInit() {

    this.dataservies.getgeo().subscribe(geog => {
      this.userobj = geog;
      console.log(this.userobj);
    })

    this.sty = [
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#ebedee"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#7f8f9f"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#e8edf3"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#cad0d5"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#7f8f9f"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#bfc6cc"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "color": "#052366"
          },
          {
            "saturation": "-70"
          },
          {
            "lightness": "85"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "lightness": "-53"
          },
          {
            "weight": "1.00"
          },
          {
            "gamma": "0.98"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": "-2"
          },
          {
            "color": "#9db0c0"
          },
          {
            "lightness": "40"
          },
          {
            "gamma": "1.06"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "lightness": "0"
          },
          {
            "saturation": "1"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a2b1be"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "weight": "1.06"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": "0"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "lightness": "100"
          },
          {
            "weight": "1.00"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "hue": "#0068ff"
          },
          {
            "saturation": "36"
          },
          {
            "lightness": "0"
          },
          {
            "weight": "1.06"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "lightness": "-30"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "lightness": "-18"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "lightness": "0"
          },
          {
            "hue": "#008aff"
          },
          {
            "saturation": "8"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
          {
            "hue": "#008aff"
          },
          {
            "saturation": "-54"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#bac8d8"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a1b4c7"
          }
        ]
      }
    ]
  }

}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
}

interface marker {
  lat: number,
  lng: number
}