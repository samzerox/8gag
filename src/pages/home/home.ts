import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { SubirPage } from "../subir/subir";

// import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';

import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";

// Plugins
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // posts: Observable<any[]>;
  hayMas: boolean = true;

  constructor(private modalCtrl: ModalController,
              private _cap: CargaArchivoProvider,
              private socialSharing: SocialSharing) {
    

                // this.posts = afDB.list('posts').valueChanges();
                

  }

  mostrar_modal() {
    let modal = this.modalCtrl.create( SubirPage);

    modal.present();
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
      
    this._cap.cargar_imagenes().then(
      ( hayMas:boolean ) =>{ 
        this.hayMas = hayMas;
        infiniteScroll.complete();
      }
    );
  }


  compartir( post: any ) {
      
    // Share via email
    this.socialSharing.shareViaWhatsApp(post.titulo, post.img, post.img)
          .then( ()=> {} ) // se pudo comartir
          .catch( () => {} ) //si sucede un error
  }



}
