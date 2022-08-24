import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'; /* IMPORTANDO FORMUALRIOS DE ANGULAR */

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'apellido' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required),
      'confirmPassword' : new FormControl("",Validators.required),
      'educacion' : new FormControl("",Validators.required),
      'nacimiento' : new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }
  guardar() {
    console.log("Registrado")

  }

}
