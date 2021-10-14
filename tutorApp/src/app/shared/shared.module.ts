import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { StepComponent } from './components/step/step.component';



@NgModule({
  declarations: [
    ButtonComponent,
    StepComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ButtonComponent,
    StepComponent
  ]
})
export class SharedModule { }
