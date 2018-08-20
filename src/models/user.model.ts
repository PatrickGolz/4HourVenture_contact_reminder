export class contact {

  vorname: string = '';
  nachname: string = '';
  id: number;
  telefon: string = '';
  mobil: string = '';
  email: string = '';
  letztesTreffen: Date;
  nextReminder: Date;
  intervall: number = 0;

  constructor() {
    this.letztesTreffen = new Date();
  }

}
