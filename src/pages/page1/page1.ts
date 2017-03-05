import { LoginModalPage } from '../login-modal/login-modal';
import { User } from './user';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  private user: User;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  
  openModal(){
    let profileModal = this.modalCtrl.create(LoginModalPage);
    profileModal.present();
  }
}
