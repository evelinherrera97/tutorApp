import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
    console.log('en el detail', this.item);
    
  }

}
