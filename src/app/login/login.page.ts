import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'; /* IMPORTANDO FORMUALRIOS DE ANGULAR */
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup; /* INICIANDO LA VARIABLE COMO FORMULARIO */

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { /* CONSTRUCTOR DE FORMULARIO */

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });

  }

  ngOnInit() {
    console.log('Login ngOnInit');
  }

  ngOnDestroy(){
    console.log('Login ngOnDestroy');
  }

  ionViewWillEnter(){
    console.log('Login ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('Login ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('Login ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('Login ionViewDidLeave');
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      const alert = await this.alertController.create({
        header : 'Hola Denuevo',
        message : 'Bienvenido otra vez',
        buttons : ['Aceptar']
      });
      await alert.present();
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
      return;
      
    }
    else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar']
      });
      
      await alert.present();
      return;
    }
  }

}
