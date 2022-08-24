import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'; /* IMPORTANDO FORMUALRIOS DE ANGULAR */

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup; /* INICIANDO LA VARIABLE COMO FORMULARIO */

  constructor(public fb: FormBuilder) { /* CONSTRUCTOR DE FORMULARIO */

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });

  }

  ngOnInit() {
  }

  ingresar() {
    console.log("Ingresado")
  }

}
