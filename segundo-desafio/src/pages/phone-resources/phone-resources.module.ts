import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneResourcesPage } from './phone-resources';

@NgModule({
  declarations: [
    PhoneResourcesPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneResourcesPage),
  ],
})
export class PhoneResourcesPageModule {}
