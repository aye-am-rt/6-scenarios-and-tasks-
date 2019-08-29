import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6p',
  template: `
    <h3>
      scenario6p works!
    </h3>
<app-scenario6-sib1 (fireEvent)="message=$event"></app-scenario6-sib1>
<br>this is parent and below line message is coming from sibling-1<br>
<h4>{{message}}</h4>
<br>
<app-scenario6-sib2 [parentData]="message" ></app-scenario6-sib2>

  `,
  styles: []
})
export class Scenario6pComponent implements OnInit {
  public message="";
  constructor() { }

  ngOnInit() {
  }

}
