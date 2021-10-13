import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerFormStepOne = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    surname: ['', [Validators.required, Validators.minLength(4)]],
  });
  registerFormStepTwo = this.fb.group({
    typeDoc: ['', Validators.required],
    document: ['', [Validators.required, Validators.minLength(10)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
  });
  registerFormStepThree = this.fb.group({
    rol: ['', Validators.required],
    especialidad: ['', Validators.required],
  });
  registerFormStepFour = this.fb.group({
    emergencyContactName: ['', Validators.required],
    emergencyContact: ['', Validators.required],
    country: ['', Validators.required],
  });

  public stepOne = false;
  public stepTwo = false;
  public stepThree = true;
  public stepFour = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  onSubmitStepOne() {}

  onSubmitStepTwo() {}

  onSubmitStepThree() {}

}
