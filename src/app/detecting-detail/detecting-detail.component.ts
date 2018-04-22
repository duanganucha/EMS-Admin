import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-detecting-detail',
  templateUrl: './detecting-detail.component.html',
  styleUrls: ['./detecting-detail.component.scss']
})
export class DetectingDetailComponent implements OnInit {

  id;
  sub:Subscription;

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  
  constructor(private route: ActivatedRoute,private db: AngularFireDatabase,) {

    this.itemsRef = db.list('test');
    this.itemsRef.snapshotChanges(['child_added'])
      .subscribe(actions => {
        actions.forEach(action => {
          console.log(action.type);
          console.log(action.key);
          console.log(action.payload.val());
        });
      });

      

  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{ 
      this.id = params['key'];
      console.log(this.id)
    });

   var a =  this.db.list('/test', ref => ref.orderByChild('keep').equalTo('true'))
    console.log(a)

  }

}
