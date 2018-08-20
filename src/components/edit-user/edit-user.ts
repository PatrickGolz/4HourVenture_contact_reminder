import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';
import { ContactManagerProvider } from '../../providers/contact-manager/contact-manager';
import { contact } from '../../models/user.model';

/**
 * Generated class for the EditUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.html'
})
export class EditUserComponent {
  contact: contact;

  constructor(
    public viewCtrl: ViewController,
    public contactManager: ContactManagerProvider
  ) {
    this.contact = new contact();
  }

  onButtonClose () {
    this.viewCtrl.dismiss();
  }

  onSubmit () {
    this.contactManager.addContact(this.contact);
    this.viewCtrl.dismiss();
  }

}
