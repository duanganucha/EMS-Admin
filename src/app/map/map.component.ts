import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  maps;
  position = { lat: 15.1317195, lng: 104.3402193 };
  jsonObj =
    [
      { "location": "Thaiware.com", "lat": "15.1347195", "lng": "104.3282193" },
      { "location": "facebook.com", "lat": "15.1357395", "lng": "104.3373193" },
      { "location": "youtube.com", "lat": "15.1355395", "lng": "104.3473193" },
      { "location": "kapook.com", "lat": "15.1359395", "lng": "104.3573193" }
    ];
  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  initMap() {

    this.maps = new google.maps.Map(document.getElementById('map'), {
      center: this.position,
      zoom: 15,
    });
    var marker, info;
    var i;
    this.jsonObj.forEach(i,item => {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(item.lat, item.lng),
        map: this.maps
      });
      info = new google.maps.InfoWindow();
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          info.setContent(item.location);
          info.open(this.maps, marker);
        }
      })(marker, i));
    });

  }

}
