import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturePadModalPage } from './signature-pad-modal';

import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [
    SignaturePadModalPage,
  ],
  imports: [
    SignaturePadModule,
    IonicPageModule.forChild(SignaturePadModalPage),
  ],
})
export class SignaturePadModalPageModule {}
