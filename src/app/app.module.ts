import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core' ;
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ManagerComponent } from './manager/manager.component';
import { NotificationComponent } from './notification/notification.component';
import { CameraComponent } from './camera/camera.component';
import { ReportComponent } from './report/report.component';
import { TeamComponent } from './team/team.component';
import { SettingComponent } from './setting/setting.component';
import { DetectingComponent } from './detecting/detecting.component';
import { ChartComponent } from './chart/chart.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { FormsModule } from '@angular/forms';
import { DetectingDetailComponent } from './detecting-detail/detecting-detail.component';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    MonitoringComponent,
    DashboardComponent,
    LoginComponent,
    MapComponent,
    ManagerComponent,
    NotificationComponent,
    CameraComponent,
    ReportComponent,
    TeamComponent,
    SettingComponent,
    DetectingComponent,
    ChartComponent,
    AmbulanceComponent,
    DetectingDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '',component:DashboardComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'detecting/:key',component:DetectingComponent},
      {path:'detecting',component:DetectingComponent},
      {path:'monitoring',component:MonitoringComponent},
      {path:'notification',component:NotificationComponent},  
      {path:'map',component:MapComponent},  
      {path:'camera',component:CameraComponent},  
      {path:'manager',component:ManagerComponent},  
      {path:'report',component:ReportComponent},
      {path:'setting',component:SettingComponent},
      {path:'chart',component:ChartComponent},  

      {path:'**',redirectTo:''}
    ],{useHash:false})
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AngularFireDatabase,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
