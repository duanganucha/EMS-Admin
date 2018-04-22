import { Component, OnInit } from '@angular/core';

declare const google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // ----------------map---------------------
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
    this.jsonObj.forEach(i, item => {
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

  // ---------Chart-------------------

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 55, 71, 56], label: 'My First dataset' },
  ];

  public chartLabels:Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
        hoverBorderWidth: 0, 
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"], 
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"],
      
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }

}
