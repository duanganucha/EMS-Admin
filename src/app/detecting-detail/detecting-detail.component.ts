import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-detecting-detail',
  templateUrl: './detecting-detail.component.html',
  styleUrls: ['./detecting-detail.component.scss']
})
export class DetectingDetailComponent implements OnInit {

  id;
  sub:Subscription;


  
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{ 
      this.id = params['key'];
      // console.log(this.id)
    });

  }

}
