import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {


  @Input() color: string;
  @Input() text: string;
  @Input() isDisabled: boolean;
  @Input() type: string;
  @Output() clickButton = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  callAction(){
    this.clickButton.emit();
  }

}
