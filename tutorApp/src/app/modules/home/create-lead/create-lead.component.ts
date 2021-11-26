import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { TutorshipsService } from 'src/app/services/tutorships.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.scss'],
})
export class CreateLeadComponent implements OnInit {

  registerLead = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(4)]],
    materia: ['', [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
    modalidad: ['', [Validators.required]],
    lugar: ['', [Validators.required]],

  });
 


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tutorshipsInfo: TutorshipsService,
    public toastController: ToastController,
    public router: Router
  ) { }

  ngOnInit() {    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Valida los datos',
      duration: 5000,
      color: "danger"
    });
    toast.present();
  }

  onSubmit() {
    if (this.registerLead.valid) {
      const data = {
        alumno: [],
        tutor: 
          {
            id: this.userService.user$.id,
            name: this.userService.user$.name,
            surname: this.userService.user$.surname
          },
        ...this.registerLead.value
      };
      this.tutorshipsInfo.addtutorInforamtion(data);
      this.router.navigate(['/home/list-lead'])
    } else {
      this.presentToast();
    }
  }

  

}
