import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { HomePage } from "../pages/home/home";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "LoginPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, userService: UsuarioProvider) {
    platform.ready().then(() => {
      
      userService.recuperarClave().then(() => {
        if (userService.clave) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = "LoginPage";
        }
      });
      statusBar.styleDefault();
      splashScreen.hide(); 
    });
  }
}

