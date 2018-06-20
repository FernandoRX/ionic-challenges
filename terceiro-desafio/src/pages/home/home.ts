import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calendars = [];
 
  constructor(public navCtrl: NavController, private calendar: Calendar, private plt: Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendars = data;
      });
    })
  }
 
  addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, firstReminderMinutes: 15 };
 
    this.calendar.createEventInteractivelyWithOptions('Novo evento', 'Patos de Minas', 'Special Notes', date, date, options).then(res => {
    }, err => {
      console.log('err: ', err);
    });
  }
 
  openCal(cal) {
    this.navCtrl.push('CalDetailsPage', { name: cal.name })
  }
}
