import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { LocalizacionProvider } from "../../providers/localizacion/localizacion";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

comercial:any= {};
  constructor(public navCtrl: NavController,
          private userService: UsuarioProvider,
          private locService: LocalizacionProvider) {

            this.locService.initLocation();
            this.locService.comercial.subscribe((data) => {
              console.log(data);
              this.comercial = data;
            })

  }


}
