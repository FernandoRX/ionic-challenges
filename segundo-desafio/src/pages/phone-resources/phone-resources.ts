import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the PhoneResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-resources',
  templateUrl: 'phone-resources.html',
})
export class PhoneResourcesPage {

  public uuid: any;
  public cordova: any;
  public modelo: any;
  public plataforma: any;
  public versao: any;
  public fabricante: any;
  public virtualizado: any;
  public serial: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public device : Device) {
    this.uuid = this.device.uuid
    this.cordova = this.device.cordova
    this.modelo = this.device.model
    this.plataforma = this.device.platform
    this.versao = this.device.version
    this.fabricante = this.device.manufacturer
    this.virtualizado = this.device.isVirtual
    this.serial = this.device.serial
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneResourcesPage');
  }

}
