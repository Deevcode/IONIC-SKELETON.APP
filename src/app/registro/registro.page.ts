import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'; /* IMPORTANDO FORMUALRIOS DE ANGULAR */
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'apellido' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required),
      'confirmPassword' : new FormControl("",Validators.required),
      'educacion' : new FormControl("",Validators.required)
    });
   }

   ngOnInit() { /* INICIO DE PROCESO DE UNA PAGINA */
    console.log('Login ngOnInit');
  }

  async guardar() { /* FUNCION ASINCRONA QUE VALIDA DATOS INGRESADOS ESTEN TODOS COMPLETOS */
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header : 'Datos Incompletos',
        message : 'Tienes que completar todos los datos',
        buttons : ['Aceptar']
      });
      await alert.present();
      return;
    }
    

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    
    /*  
-------------- POSIBLE VALIDACION PARA PARAMETROS DE REGISTRO -------------- COMPILA PERO NO CONDICIONA

    if(usuario.password == String && usuario.nombre == Number){
      const alert = await this.alertController.create({
        header : 'Datos Incompletos',
        message : '123456',
        buttons : ['Aceptar']
      });
      await alert.present();
      return;
    }
---------------------------------------------------------------------------------------------------------
    */
    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado','true');
    this.navCtrl.navigateRoot('home');
  }

  ngOnDestroy(){ /* FIN DE LA EJECUCCION DE PROCESOS */
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
  
  

}
