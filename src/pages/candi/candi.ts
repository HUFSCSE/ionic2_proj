import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from "../detail/detail";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Candi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-candi',
  templateUrl: 'candi.html'
})
export class CandiPage {
  selected: any;
  candis:FirebaseListObservable<any>;

  constructor(af:AngularFire, public navCtrl: NavController, public navParams: NavParams) {
    this.candis = af.database.list('/candidate');
  }

  candiChoice(){
    console.log(this.selected);
    let params = {
      sel: this.selected
    };
    this.navCtrl.push( DetailPage, params);
  }
}
