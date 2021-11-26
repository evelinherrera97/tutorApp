import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TutorshipsService } from 'src/app/services/tutorships.service';
import { UserService } from 'src/app/services/user.service';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-all-lead',
  templateUrl: './all-lead.component.html',
  styleUrls: ['./all-lead.component.scss'],
})
export class AllLeadComponent implements OnInit {

  public list: any;

  constructor(
    private _tutorshipsService: TutorshipsService,
    public modalController: ModalController,
    private user: UserService,
  ) { }

  ngOnInit() {
    this._tutorshipsService.getAllTutorships().subscribe((data: any) => {
      this.list = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      });
    })
  }

  async presentModal(item) {
    const user = this.user.user$;
    const modal = await this.modalController.create({
      component: DetailPage,
      cssClass: 'my-custom-class',
      componentProps: {
        item,
        user
      }
    });
    return await modal.present();
  }

}
