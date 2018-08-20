import { Component } from '@angular/core';

/**
 * Generated class for the NotificationListNotificationCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-list-notification-card',
  templateUrl: 'notification-list-notification-card.html'
})
export class NotificationListNotificationCardComponent {

  text: string;

  constructor() {
    console.log('Hello NotificationListNotificationCardComponent Component');
    this.text = 'Hello World';
  }

}
