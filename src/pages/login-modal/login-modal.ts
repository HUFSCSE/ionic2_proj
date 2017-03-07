import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public af: AngularFire, private _auth: AuthService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

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
      .then((success) => this.navigateAbout(success), (failed) => {

        let alert = this.alertCtrl.create({
          title: '알림',
          subTitle: '구글 인증에 실패하였습니다. 다시한번 시도해주세요.',
          buttons: ['확인']
        });
        alert.present();

      });
  }

  private navigateAbout(successData): void {
  }
}
