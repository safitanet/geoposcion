import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuarioProvider } from '../providers/usuario/usuario';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LocalizacionProvider } from '../providers/localizacion/localizacion';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { LogoutComponent } from '../components/logout/logout';

export const firebaseConfig = {
    apiKey: "AIzaSyDkeIOg2gesP-rg-SF_bysLHpK-a8U_aKA",
    authDomain: "cta-comercial.firebaseapp.com",
    databaseURL: "https://cta-comercial.firebaseio.com",
    projectId: "cta-comercial",
    storageBucket: "cta-comercial.appspot.com",
    messagingSenderId: "843795466215"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQYF0rFLlC-P7MG3cw_hK8coWLmuq2E5I'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    LocalizacionProvider,
    Geolocation
  ]
})
export class AppModule {}
