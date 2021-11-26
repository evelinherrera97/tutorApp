import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TutorshipsService } from 'src/app/services/tutorships.service';
import { UserService } from 'src/app/services/user.service';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.scss'],
})
export class ListLeadComponent implements OnInit {

  public list: any;
  public rol: any;

  constructor(
    public _tutorshipsService : TutorshipsService,
    public _userServices:  UserService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this._tutorshipsService.getAllTutorships().subscribe((data: any) => {
      let list = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      });
      if (this._userServices.user$.rol === 'tutor') {
        this.filterList(list);
      } else {
        this.filterListStudent(list)
      }
      
    });
    this.rol = this._userServices.user$.rol;
   }

  filterList(list) {
    let items = [];
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.tutor.id === this._userServices.user$.id) {
        items.push(element)
      }
    }
    this.list = items
    console.log('EL PUTOOO', this.list);
  }

  filterListStudent(list) {
    let items = [];
    for (let index = 0; index < list.length; index++) {
      const element = list[index];  
      for (let index = 0; index < element.alumno.length; index++) {
        const item = element.alumno[index];
        if (item.id === this._userServices.user$.id) {
          items.push(element)
        }
      }    
      
    }
    this.list = items
  }

  async presentModal(item) {
    const user = this._userServices.user$
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
