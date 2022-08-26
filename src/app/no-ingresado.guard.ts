import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem('ingresado')){
      this.navCtrl.navigateRoot('home');
      return false; /* SI EL USUARIO ESTA LOGEADO CON UNA SECCION, HAZLO PASAR */
    }else{
      return true;/* SI EL USUARIO NO ESTA LOGEADO CON UNA SECCION, DENEGA EL ACCESO */
    }
  }
  
}
