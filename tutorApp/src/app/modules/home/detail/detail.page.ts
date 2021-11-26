import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TutorshipsService } from 'src/app/services/tutorships.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  @Input() item: any;
  @Input() user: any;

  constructor(
    public tutorshipsService: TutorshipsService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('en el detail', this.item);
    console.log('en el detail user', this.user);
  }

  delete() {
    this.tutorshipsService.deleteItem(this.item.id)
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  goToBack() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  registerInTutoyShips() {
    this.item.alumno.push(
      {
        'name': this.user.name,
        'surname': this.user.surname,
        'email': this.user.email,
        'id': this.user.id
      }
    )
    
    this.tutorshipsService.updateTutorships(this.item.id, this.item);
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  

}
