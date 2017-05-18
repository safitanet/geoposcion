import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsuarioProvider } from "../../providers/usuario/usuario";
import { LocalizacionProvider } from "../../providers/localizacion/localizacion";


@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  text: string;

  constructor(public navCtrl: NavController, private userService: UsuarioProvider,
          private locService: LocalizacionProvider) {
    console.log('Hello LogoutComponent Component');
    this.text = 'Hello World';
  }

  salir() {
    console.log("entro en salir");
    this.userService.clave=null;
    this.locService.stopLocation();
    this.navCtrl.setRoot("LoginPage");
  }

}
