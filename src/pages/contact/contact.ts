import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { EditUserComponent } from '../../components/edit-user/edit-user';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //showModal = false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {



  }

  onFabClicked() {
    const modal = this.modalCtrl.create(EditUserComponent);
    modal.present();
    //this.showModal = true;
  }
  

}
