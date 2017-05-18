import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController, LoadingController } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { HomePage } from "../home/home";


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit {

  clave: string = '';
  @ViewChild(Slides) slides: Slides;
  // @ViewChild("slide1") slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
            public userService: UsuarioProvider, 
            public toastCtrl: ToastController,
            public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  continuar() {
    let loading = this.loadCtrl.create({
      content: "Validando clave..."
    });
    loading.present();

    this.userService.validar(this.clave).then((result) => {

      loading.dismiss();
      
      if (result) {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      } else {
        // lanzar un toast
        let toast = this.toastCtrl.create({
          message: "No se ha podido verificar esta clave",
          duration: 3000
        });
        toast.present();
      }
    })
  }

  acceder() {
    this.navCtrl.setRoot(HomePage);
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = "progress";
  }

}
