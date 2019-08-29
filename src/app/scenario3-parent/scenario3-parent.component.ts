import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3-parent',
  template: `

  <h3> Scenario 3 parent works !</h3>
  <app-scenario3-child [parentData]="nameP" style="color:green;" ></app-scenario3-child>
  `,
  styles: []
})
export class Scenario3ParentComponent implements OnInit {

  public nameP="this is parent of scenario 3";

  constructor() { }

  ngOnInit() {
  }

}
