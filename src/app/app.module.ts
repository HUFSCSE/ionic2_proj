import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {CandiPage} from "../pages/candi/candi";
import {DetailPage} from "../pages/detail/detail";
import {VideoPage} from "../pages/video/video";
import {LoginModalPage} from "../pages/login-modal/login-modal";
import {YoutubeService} from "../providers/youtube-service/youtube-service";
import {AngularFireModule} from "angularfire2";

const firebaseConfig={
  apiKey: "AIzaSyDszBUAqnRlgnpPdcl7u2T4Tsb1QANHhRY",
  authDomain: "ionic2study-a2337.firebaseapp.com",
  databaseURL: "https://ionic2study-a2337.firebaseio.com",
  storageBucket: "ionic2study-a2337.appspot.com",
  messagingSenderId: "194394008274"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    CandiPage,
    DetailPage,
    VideoPage,
    LoginModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    CandiPage,
    DetailPage,
    VideoPage,
    LoginModalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},YoutubeService]
})
export class AppModule {}
