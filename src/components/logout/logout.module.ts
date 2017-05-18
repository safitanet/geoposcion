import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoutComponent } from './logout';

@NgModule({
  declarations: [
    LogoutComponent,
  ],
  imports: [
    IonicPageModule.forChild(LogoutComponent),
  ],
  exports: [
    LogoutComponent
  ]
})
export class LogoutComponentModule {}
