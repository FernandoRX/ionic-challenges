import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, DateTime } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
 
@IonicPage()
@Component({
  selector: 'page-cal-details',
  templateUrl: 'cal-details.html',
})
export class CalDetailsPage {
  calName = '';
  events = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, private plt: Platform) {
    this.calName = navParams.get('name');
 
     let start = new Date();
      let end = new Date();
      end.setDate(end.getDate() + 30);
      start.setDate(start.getDate() -30);
 
      this.calendar.listEventsInRange(start, end).then(data => {
        this.events = data;
      });
    }
  }