import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from "../detail/detail";
import { Http } from '@angular/http';

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
  candis = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://ionic2study-a2337.firebaseio.com/candidate.json').map(res => res.json()).subscribe(data => {
      // firebase에서 object 타입으로 받아온것을 array로 변환한다. (뷰에서 ngFor로 돌리기 위해)
      let arr = [];

      for(let x in data){
        data[x].$key = x;
        arr.push(data[x]);
      }
      this.candis = arr;
    });
  }

  candiChoice(){
    console.log(this.selected);
    let params = {
      sel: this.selected
    };
    this.navCtrl.push( DetailPage, params);
  }
}
