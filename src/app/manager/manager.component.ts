import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  maps;
  position = { lat: 15.1317195, lng: 104.3402193 };
 
  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  initMap() {

    var uluru = this.position;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

  }

}
