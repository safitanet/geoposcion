import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { UsuarioProvider } from "../usuario/usuario";


@Injectable()
export class LocalizacionProvider {
  watch:any;
  comercial:FirebaseObjectObservable<any[]>;

  constructor(private geolocation: Geolocation, private af: AngularFireDatabase, userService: UsuarioProvider) {
    console.log('Hello LocalizacionProvider Provider');
    this.comercial = af.object('/usuarios/' + userService.clave);
  }

  initLocation() {
    this.watch = this.geolocation.watchPosition()
      .subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(data);
      this.comercial.update({lat:data.coords.latitude, lng:data.coords.longitude});
    });
  }

  stopLocation() {
    console.log("entro en stopLocation");
    this.watch.unsubscribe();
  }

}
