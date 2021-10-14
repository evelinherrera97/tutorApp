import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public toastController: ToastController
  ) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.text,
      duration: 5000,
      color: "danger"
    });
    toast.present();
  }

  onSubmit() {
    console.log();
    if (this.loginForm.valid) {
      if (this.loginForm.value.id === 'evherrera@poligran.edu.co') {
        this.router.navigate(['/home']);
      } else {
        this.text = "Usuario o contraseña incorrecto, verifica."
        this.presentToast();
      }
    } else {
      this.text = "Ingresa un correo Valido"
      this.presentToast();
    }

  }

}
