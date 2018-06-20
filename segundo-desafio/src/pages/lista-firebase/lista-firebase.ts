import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ListaFirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-firebase',
  templateUrl: 'lista-firebase.html',
})
export class ListaFirebasePage {

  private itemsCollection: AngularFirestoreCollection<any>;
  public items: Observable<any[]>;
  
  constructor( public db: AngularFirestore) {
    this.itemsCollection = db.collection<any>('batteryStatus');
    this.items = this.itemsCollection.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFirebasePage');
  }
}
