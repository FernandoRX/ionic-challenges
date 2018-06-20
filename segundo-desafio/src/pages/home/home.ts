import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';
import moment from 'moment';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public color: any = '#000000'
  public isPlugged: any = false
  public batteryQuantity: any = 0
  public battery: any
  public checkTime : any 
  public itemsCollection: AngularFirestoreCollection<any>

  constructor(public navCtrl: NavController, public batteryStatus: BatteryStatus, public db: AngularFirestore) {

    this.itemsCollection = db.collection<any>('batteryStatus');
  }

  ionViewDidLoad(){
    this.CheckBattery()
  }

  async CheckBattery () {
    try{
      await this.batteryStatus.onChange().subscribe(status => {
        this.battery = status

        if (this.battery.level >= 30) {
          this.color = 'green'
        }

        if (this.battery.level < 30 && this.battery.level > 15) {
          this.color = 'yellow'
        }

        if (this.battery.level <= 15) {
          this.color = 'red'
        }

        this.batteryQuantity = this.battery.level
        this.isPlugged = this.battery.isPlugged
        this.checkTime = moment().format('DD/MM/YYYY HH:mm')

        this.saveBatteryStatus();
      })
    }
    catch(err){

    }
      
  }

  saveBatteryStatus () {
    const id = this.db.createId();
    
    this.itemsCollection.doc(id).set({
      id: id,
      batteryQuantity: this.batteryQuantity,
      isPlugged: this.isPlugged,
      checkTime: this.checkTime
    })
  }

}
