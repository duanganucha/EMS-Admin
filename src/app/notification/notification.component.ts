import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router' 

import { Observable } from 'rxjs/Observable';

declare var google: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  scene:string = ""
  constructor(private db: AngularFireDatabase,private router : Router) {
   
    this.itemsRef = db.list('test');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

  }

  onDelete(item) {
    this.itemsRef.remove(item);

  }

  onApprove(item){
    this.itemsRef.update(item.key, { scene : this.scene });
    this.itemsRef.update(item.key, { status : "Approve" });
    this.scene = "";
  }

  onDrop(item){
    this.itemsRef.update(item.key, { scene : this.scene });
    this.itemsRef.update(item.key, { status : "Drop" });
    this.scene = "";
  }

 
}
