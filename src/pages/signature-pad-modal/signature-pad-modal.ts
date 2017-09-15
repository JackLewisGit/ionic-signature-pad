import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';


@IonicPage()
@Component({
  selector: 'page-signature-pad-modal',
  templateUrl: 'signature-pad-modal.html',
})
export class SignaturePadModalPage {
  // Get the dom elements
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('pad', { read: ElementRef }) content: ElementRef;

  // Initial sizes for the canvas
  private options = {
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  }

  constructor( public viewCtrl: ViewController ) {}

  ionViewDidLoad() {
    // When the page has finished loading, resize the canvas to fit the screen
    this.signaturePad.set( 'canvasWidth', this.content.nativeElement.offsetWidth );
    this.signaturePad.set( 'canvasHeight', this.content.nativeElement.offsetHeight );    
  }

  save() {
    // Get the image of the signature as a base64 encoded string
    const base64Img = this.signaturePad.toDataURL();

    // Close the modal and pass the signature back
    this.viewCtrl.dismiss({ signature: base64Img });
  }

  cancel() {
    this.viewCtrl.dismiss({});
  }

}
