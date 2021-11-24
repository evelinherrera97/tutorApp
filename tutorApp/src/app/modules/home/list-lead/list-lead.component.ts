import { Component, OnInit } from '@angular/core';
import { TutorshipsService } from 'src/app/services/tutorships.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.scss'],
})
export class ListLeadComponent implements OnInit {

  public list: any

  constructor(
    public _tutorshipsService : TutorshipsService,
    public _userServices:  UserService
  ) { }

  ngOnInit() {
    this._tutorshipsService.getAllTutorships().subscribe((data: any) => {
      let list = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      });
      this.filterList(list);
    })
   }

  filterList(list) {
    let items = [];
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      console.log('listId', element.tutor.id );
      console.log('USERiD', this._userServices.user$.id );
      
      if (element.tutor.id === this._userServices.user$.id) {
        items.push(element)
      }
    }
    this.list = items
    console.log('EL PUTOOO', this.list);
  }

}
