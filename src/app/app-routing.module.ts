import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard'; /* IMPORTAR LOS GUARD */
import { NoIngresadoGuard } from './no-ingresado.guard'; /* IMPORTAR LOS GUARD */

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard] /* VALIDA SI SE ESTA USANDO POR UN USUARIO REGISTRADO */
  },
  {
    path: '',
    redirectTo: 'login', /* AL ABRIR LA APP REDIRECCIONARA A LA PAGE LOGIN */
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [IngresadoGuard] /* VALIDA SI SE ESTA USANDO POR UN USUARIO REGISTRADO */
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [IngresadoGuard] /* VALIDA SI SE ESTA USANDO POR UN USUARIO REGISTRADO */
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
