import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-gc',
  templateUrl: './scenario5-gc.component.html',
  styleUrls: ['./scenario5-gc.component.css']
})
export class Scenario5GcComponent implements OnInit {
 
  @Output() public fireEvent=new EventEmitter();

  constructor() { }

  public setid="id2";
  public startwrite="";

  ngOnInit() {
  }
  clickevent()
  {
    this.fireEvent.emit(this.startwrite);
  }

}
