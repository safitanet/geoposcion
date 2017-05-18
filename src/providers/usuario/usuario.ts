import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsuarioProvider {

  //usuarios: FirebaseListObservable<any[]>;
  clave: string = "";

  constructor(private af: AngularFireDatabase, private storage: Storage) {

  }

  validar(clave: string): Promise<boolean> {
    let promise = new Promise((resolve, reject) => {
      let subs = this.af.list('/usuarios/' + clave)
        .subscribe((data) => {
          if (data.length === 0) {
            // subs.unsubscribe();
            resolve(false);
          } else {
            this.clave = clave;
            this.guardarClave();
            resolve(true);
          }
        })
    });

    return promise;
  }

  // comprobar si estás en mobile o en desktop
  // this.platform.is("cordva");

  guardarClave() {
    let promise = new Promise((resolve, reject) => {
      this.storage.set("clave", this.clave).then(() => {
        resolve();
      });
    });
    
  }

  recuperarClave() {
    let promise = new Promise((resolve, reject) => {
      this.storage.ready().then(() => {
        this.storage.get("clave").then((clave) => {
          this.clave = clave;
          resolve();
        });
      })
    });

    return promise;

  }

}
