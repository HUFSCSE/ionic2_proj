import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from "../detail/detail";

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
  selected: number
  items = [
    'Moon',
    'Ann',
    'Lee',
    'You'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  candiChoice(){
    console.log(this.items[this.selected]);
    let params = {
      idx: this.selected
    };
    this.navCtrl.push( DetailPage, params);
  }
}
