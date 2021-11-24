import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { doc, getDoc } from "firebase/firestore";
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm = this.fb.group({
    id: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  public text: string;
  public item$: any;
  public user$: any;


  constructor(
    private fb: FormBuilder,
    public router: Router,
    public toastController: ToastController,
    private readonly afs: AngularFirestore,
    public _user: UserService
  ) {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.text,
      duration: 5000,
      color: "danger"
    });
    toast.present();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.id.includes('poligran.edu.co')) {
        this.getAllCountry();

      } else {
        this.text = "debe ser un correo institucional"
        this.presentToast();
      }
    } else {
      this.text = "Ingresa un correo Valido"
      this.presentToast();

    }

  }

  getAllCountry(): any {
    this._user.getAllUser().subscribe((data: any) => {
      this.user$ = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User
      });
      console.log(this.user$);

      this.filtrerForId(this.user$)
    });
  }

  filtrerForId(obj) {
    let existUser = false
    for (let index = 0; index < obj.length; index++) {
      const element = obj[index];
      if (element.email === this.loginForm.value.id && element.password === this.loginForm.value.password) {
        existUser = true
        this._user.user$ = obj[index];
      } 
    }
    if (existUser ) {
      this.router.navigate(['/home']);
    } else {
      this.text = "Usuario o contraseña incorrecto"
      this.presentToast();
    }

  }

}

export class User {
  document: string;
  documentType: string;
  phoneNumber: number;
  rol: string;
  email: string;
  password: string;
  name: string;
  surname: string;
}
