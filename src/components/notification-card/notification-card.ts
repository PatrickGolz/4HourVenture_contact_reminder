import {Component, EventEmitter, Input, Output} from '@angular/core';
import {contact} from "../../models/user.model";

/**
 * Generated class for the NotificationCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-card',
  templateUrl: 'notification-card.html'
})
export class NotificationCardComponent {

  @Output() isExpanded = new EventEmitter();
  @Input() contact: contact;
  @Input() expanded = false;
  nextMeetingString: string;

  constructor() {
  }

  toggleExpanded() {
    this.isExpanded.emit();
    this.expanded = !this.expanded;
    this.convertDateToWeeks();
  }

  convertDateToWeeks() {
    const millisecs = this.contact.nextReminder.valueOf() - new Date().valueOf();
    const weeks = Math.floor(millisecs / 604800000);
    this.nextMeetingString = "in " + weeks + " Wochen";
  }

}
