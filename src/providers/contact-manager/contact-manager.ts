//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {contact} from "../../models/user.model";

/*
 Generated class for the ContactManagerProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
*/
@Injectable()
export class ContactManagerProvider {
  contacts : contact[] = [
    {
      vorname: 'Zugfried',
      nachname: 'Ziegelstein',
      id: 1,
      telefon: "12345",
      mobil: "239393",
      email: "pop@student.de",
      letztesTreffen: new Date('1995-12-17T03:24:00'),
      nextReminder: new Date('2019-12-17T03:24:00'),
      intervall: 4
    },
    {
      vorname: 'Nathanael',
      nachname: 'Ziegelberger',
      id: 2,
      telefon: "12345",
      mobil: "239393",
      email: "pop@student.de",
      letztesTreffen: new Date('1995-12-17T03:24:00'),
      nextReminder: new Date('2020-12-17T03:24:00'),
      intervall: 4
    },
    {
      vorname: 'Patricia',
      nachname: 'Wuderkind',
      id: 6,
      telefon: "12345",
      mobil: "239393",
      email: "pop@student.de",
      letztesTreffen: new Date('1995-12-17T03:24:00'),
      nextReminder: new Date('2017-12-17T03:24:00'),
      intervall: 4
    },
    {
      vorname: 'Nina',
      nachname: 'Nobody',
      id: 7,
      telefon: "12345",
      mobil: "239393",
      email: "pop@student.de",
      letztesTreffen: new Date('1995-12-17T03:24:00'),
      nextReminder: new Date('2018-12-17T03:24:00'),
      intervall: 4
    },
    {
      vorname: 'Peter',
      nachname: 'Berg',
      id: 8,
      telefon: "12345",
      mobil: "239393",
      email: "pop@student.de",
      letztesTreffen: new Date('1995-12-17T03:24:00'),
      nextReminder: new Date('2222-12-17T03:24:00'),
      intervall: 4
    }
  ];

  constructor(
    //public http: HttpClient
  ) {
    console.log('Hello ContactManagerProvider Provider');
  }

  addContact(contact) {
    let id = this.contacts.length;
    contact.id = id;
    contact.nextReminder = new Date(contact.letztesTreffen.valueOf() + contact.intervall * 30 * 24 * 60 * 60 * 1000);
    this.contacts.push(contact);
    console.log(this.contacts);
  }

  editContact(editContact) {
    let currentContact = this.contacts.find(c => c.id === editContact.id);
    if (currentContact) {
      currentContact = editContact;
    }
  }

  getSortedContacts() {
    const sortedContacts = this.contacts
      .sort((c1, c2) => {
        const date1 = c1.nextReminder.valueOf();
        const date2 = c2.nextReminder.valueOf();
        return date1 - date2;
      });
    return sortedContacts;
  }

  snoozeContactReminder(contact) {

    this.contacts.find(c => c.id === contact.id).nextReminder = new Date(contact.nextReminder + 7 * 24 * 60 * 60 *1000);

  }

  dismissContactReminder(contact) {

  }

}

