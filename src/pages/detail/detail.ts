import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {
  selected: string;
  title: string;
  candidate:FirebaseObjectObservable<any>;
  size: number = 0;
  pledges: string[] = [];
  p_str : string = 'pledge';
  idx : string[] = ['a','b'];

  constructor(af:AngularFire, public navCtrl: NavController, public navParams: NavParams) {
    this.selected = navParams.get('sel');

    this.candidate = af.database.object('/candidate/'+this.selected);
    this.candidate.subscribe(snapshot => {
      this.title = snapshot.name;
      this.size = snapshot.size;
      for (var _i = 0; _i < this.size; _i++) {
        this.pledges.push(snapshot[this.p_str+this.idx[_i]]);
      }
      //console.log(this.size);
      //console.log(snapshot);
    });
    console.log(this.pledges);

  }
}
