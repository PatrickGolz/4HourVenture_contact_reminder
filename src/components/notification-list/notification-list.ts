import {Component, EventEmitter, Output} from '@angular/core';
import {ContactManagerProvider} from "../../providers/contact-manager/contact-manager";
import {contact} from "../../models/user.model";

/**
 * Generated class for the NotificationListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-list',
  templateUrl: 'notification-list.html'
})
export class NotificationListComponent {


  contactList: contact[] = [
  ];

  constructor(private contactManager: ContactManagerProvider) {
    this.contactList  = contactManager.getSortedContacts();
  }

  // ionViewDidLoad() {
  //   this.contactList  = this.contactManager.getNotifications();
  // }

  onUpdate() {
    this.contactList  = this.contactManager.getSortedContacts();
  }

  collapseAll() {

  }

}
