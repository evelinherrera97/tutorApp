import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userType: any;

  constructor(
    private _user: UserService
  ) {
    this.userType = this._user.user$.rol    
  }

}
