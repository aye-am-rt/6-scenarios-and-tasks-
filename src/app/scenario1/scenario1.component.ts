import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  template: `
     <h3> scenario1 works!</h3>
     <input type="text" #ids1>
     <button (click)="ConsolePrint(ids1.value)" type="button">Print to console</button>
     <br><br>{{AfterClick}}
  `,
  styles: []
})
export class Scenario1Component implements OnInit {
  public myid;
  public AfterClick="";

  ConsolePrint(myid){
    console.log(myid);
    this.AfterClick="go to console to see the printed data"
  }

  constructor() { }

  ngOnInit() {
  }

}
