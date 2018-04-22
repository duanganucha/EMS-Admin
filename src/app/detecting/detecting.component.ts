import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'; //เอาไว้ทำ UnSubscribe
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Casedetail } from './../case-detail';
import { Team } from './../team';

declare var google: any;


@Component({
  selector: 'app-detecting',
  templateUrl: './detecting.component.html',
  styleUrls: ['./detecting.component.scss']
})
export class DetectingComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  key;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  casedetail: Casedetail[];
  selectCase: Casedetail;

  teams: Team[];
  selectTeam: Team;

  path1: any;
  path2: any;
  public distance: any;
  public duration: string;
  public start_address: string;
  public end_address: string;
 
  id:string;
  sub:Subscription;


  constructor(private route: ActivatedRoute ,private db: AngularFireDatabase) {
    this.itemsRef = db.list('test');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

// 
    // this.filterBooks()
  }


 

  ngOnInit() {

    this.sub = this.route.params.subscribe(params =>{ 
      this.id = params['key'];
      // console.log(this.id)
    });


    this.casedetail = [
      new Casedetail(1, 'Halifax, NS'),
      new Casedetail(2, 'Boston, MA'),
      new Casedetail(3, 'New York, NY'),
    ]

    this.teams = [

      new Team(1, "สว่างจิตต์ ศก.", 'Vancouver, BC'),
      new Team(2, "ศก.สงเคราห์", 'Seattle, WA'),
      new Team(3, "อบต.โพนค้อ", 'San Francisco, CA'),

    ]

    this.MapStart();
    this.StreetViewPanorama();


  }
  ngOnDestroy(){
    // console.log('destroy');
    this.sub.unsubscribe();
  }

  MapStart() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: { lat: 15.0210006, lng: 104.3137318 }
    });
    this.directionsDisplay.setMap(map);
    this.directionsDisplay.setPanel(document.getElementById('right-panel'));
  }

  routePath() {
    // this.path1 = this.selectCase.name
    // this.path2 = this.selectTeam.location 

    this.path1 = { lat: 15.0987456, lng: 104.3163617 }
    this.path2 = { lat: 15.1187152, lng: 104.3268533 }

    this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)
  }
  

  calculateAndDisplayRoute(directionsService, directionsDisplay) {

    directionsService.route({
      origin: this.path1,
      destination: this.path2,
      travelMode: 'DRIVING'

    },  (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        
        this.distance = response.routes[0].legs[0].distance.text;
        this.duration = response.routes[0].legs[0].duration.text;
        this.start_address = response.routes[0].legs[0].start_address;
        this.end_address = response.routes[0].legs[0].end_address;

        console.log(response.routes[0].legs[0].distance.text)
        console.log(response.routes[0].legs[0].end_address)
        
        this.distance
       

      } else {
        window.alert('Directions request failed due to ' + status);
      }         this.distance

    }
  );

  }
  calPath() {
    this.distance
    
  }
  
  StreetViewPanorama() {
    // var fenway = { lat: 42.345573, lng: -71.098326 };
    var fenway = { lat: 15.1158148, lng: 104.3205983 };

    var map2 = new google.maps.Map(document.getElementById('map2'), {
      center: fenway,
      zoom: 10
    });
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
    map2.setStreetView(panorama);

  }




  showCase(scense: Casedetail) {
    this.selectCase = scense;
    console.log(scense)

  }

  showTeam(team: Team) {
    this.selectTeam = team;
    console.log(team)
  }

  createMap(location = new google.maps.LatLng(15.9842532, 101.1071849)) {

    let mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false
    }
    let mapEI = document.getElementById('map')
    let map = new google.maps.Map(mapEI, mapOptions);

    return map;

  }

}
