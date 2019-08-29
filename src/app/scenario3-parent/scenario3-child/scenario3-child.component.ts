import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3-child',
  template: `
  <h3> Scenario 3 Child works !</h3>
  <p>hello</p>
  <span> {{newName}} </span><br>
  <p>The red colored text above is coming from Scenario 3 PARENT via @input</p>
  `,
  styles: [`
  span
  { 
    color: red;
    text-transform: uppercase;
  }
  
 `]
})
export class Scenario3ChildComponent implements OnInit {

  @Input ('parentData') public newName;

  constructor() { }

  ngOnInit() {
  }

}
