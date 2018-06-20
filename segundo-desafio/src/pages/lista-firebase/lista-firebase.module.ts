import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFirebasePage } from './lista-firebase';

@NgModule({
  declarations: [
    ListaFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFirebasePage),
  ],
})
export class ListaFirebasePageModule {}
