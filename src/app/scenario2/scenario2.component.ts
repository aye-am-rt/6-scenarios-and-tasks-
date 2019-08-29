import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  template: `
   <h3> scenario2 works!</h3>

    <input [(ngModel)]="startwrite" type="text" [id]="id2">
    <p> what you write will be shown here--</p>
    {{startwrite}}
  `,
  styles: []
})
export class Scenario2Component implements OnInit {
  public setid="id2";
  public startwrite="";

  

  constructor() { }

  ngOnInit() {
  }

}
