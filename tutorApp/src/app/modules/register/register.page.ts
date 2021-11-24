import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public name: string;
  public rol = false;


  registerFormStepOne = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    surname: ['', [Validators.required, Validators.minLength(4)]],
  });
  registerFormStepTwo = this.fb.group({
    documentType: ['', Validators.required],
    document: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });
  registerFormStepThree = this.fb.group({
    rol: ['', Validators.required]
    // especialidad: ['', Validators.required],
  });
  registerFormStepFour = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  public stepOne = true;
  public stepTwo = false;
  public stepThree = false;
  public stepFour = false;

  info = [
    {
      type: 'current',
      text: '1'
    },
    {
      type: 'next',
      text: '2'
    },
    {
      type: 'next',
      text: '3'
    },
    {
      type: 'next',
      text: '4'
    }
  ]

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmitStepOne() {
    if (this.registerFormStepOne.valid) {
      this.name = this.registerFormStepOne.value.name
      this.stepTwo = true;
      this.stepOne = false;
      this.info = [
        {
          type: 'ok',
          text: '1'
        },
        {
          type: 'current',
          text: '2'
        },
        {
          type: 'next',
          text: '3'
        },
        {
          type: 'next',
          text: '4'
        }
      ]
    } else {
      // this.registerFormStepOne['controls'][name]  
    }
  }

  onSubmitStepTwo() {
    if (this.registerFormStepTwo.valid) {
      this.stepTwo = false;
      this.stepThree = true;
      this.info = [
        {
          type: 'ok',
          text: '1'
        },
        {
          type: 'ok',
          text: '2'
        },
        {
          type: 'current',
          text: '3'
        },
        {
          type: 'next',
          text: '3'
        }
      ]
    }
  }
  onSubmitStepThree() {
    if (this.registerFormStepThree.valid) {
      this.stepThree = false;
      this.stepOne = false;
      this.stepFour = true;
      this.info = [
        {
          type: 'ok',
          text: '1'
        },
        {
          type: 'ok',
          text: '2'
        },
        {
          type: 'ok',
          text: '3'
        },
        {
          type: 'current',
          text: '4'
        }
      ]

    }
  }

  onSubmitStepFour() {
    if (this.registerFormStepFour.valid) {
      if (this.registerFormStepFour.value.email.includes('poligran.edu.co')) {
        const body = { ...this.registerFormStepOne.value, ...this.registerFormStepTwo.value, ...this.registerFormStepThree.value, ...this.registerFormStepFour.value }
        const flag = this.userService.registerUser(body);
        if (flag) {
          console.log(body)
          this.router.navigate(['/home'])
        } else {
          console.log('no se registro correctamente');
        }
      } else {
        console.log('el correo no es institucional');
        
      }


    }
  }

  getValueSelectRol(rol) {
    this.rol = rol === 'student' ? false : true;
  }

}
