import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';



@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  titulo:string;

  constructor(public viewCtrl: ViewController) {
  }

  
  cerrar_modal() {
    this.viewCtrl.dismiss();
  }

}

