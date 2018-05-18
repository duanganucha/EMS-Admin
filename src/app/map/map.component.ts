import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router' 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent   {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;


  lat: Number = 24.799448;
  lng: Number = 120.979021;
  zoom: Number = 14;
 
  dir = undefined;
 
  getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }
    this.setPanel()
  }

   setPanel(){
    return document.querySelector('#myPanel'); 
  }
  

}
