import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import {AuthService} from "../../providers/auth-service/auth-service";

/*
  Generated class for the LoginModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html'
})
export class LoginModalPage {

  constructor(public af: AngularFire, private _auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModalPage');
  }

  authLogin() {
  }

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then((success) => this.navigateAbout(success));
  }

  signInWithGoogle(): void {
    this._auth.signInWithGoogle()
      .then((success) => this.navigateAbout(success));
  }

  private navigateAbout(successData): void {
  }
}
