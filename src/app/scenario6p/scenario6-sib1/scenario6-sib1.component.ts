import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-scenario6-sib1',
  template: `
    <h3>
      scenario6-sib1 works!
    </h3>

    
<input [(ngModel)]="startwrite" type="text">
<br>
<p>below here what you type will be send when you click on button</p>
{{startwrite}}
<br>
<br>
<button (click)="clickevent()">Send Event From Sibling 1</button>

  `,
  styles: []
})
export class Scenario6Sib1Component implements OnInit {
  @Output() public fireEvent=new EventEmitter();
  
  constructor() { }

  public startwrite="";

  ngOnInit() {
  }

  clickevent()
  {
    this.fireEvent.emit(this.startwrite);
  }

}
