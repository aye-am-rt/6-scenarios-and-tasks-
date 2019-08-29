import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-scenario6-sib2',
  template: `
    <h3>
      scenario6-sib2 works!
    </h3>
    <br>the below line has been sent from parent and i am sibling 2<br><br>
    <h2>{{newName}}</h2>
    <br>

  `,
  styles: []
})
export class Scenario6Sib2Component implements OnInit {
  @Input ('parentData') public newName;

  constructor() { }

  ngOnInit() {
  }

}
