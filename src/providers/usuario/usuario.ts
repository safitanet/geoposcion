import { Injectable } from '@angular/core';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor() {
    console.log('Hello UsuarioProvider Provider');
  }

  validar(clave:string):Promise<boolean> {
    let promise = new Promise((resolve, reject) => {

      setTimeout(()=>{
        if (clave === "123456") {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 3000);
    });

    return promise;
  }

}
