import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  templateUrl: './scenario4-child.component.html',
  styleUrls: ['./scenario4-child.component.css']
})
export class Scenario4ChildComponent implements OnInit {

  @Output() public fireEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  clickevent()
  {
    this.fireEvent.emit("I am Child of Scenario4.");
  }

}
