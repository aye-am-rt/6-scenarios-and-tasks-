import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3ParentComponent } from './scenario3-parent/scenario3-parent.component';
import { Scenario3ChildComponent } from './scenario3-parent/scenario3-child/scenario3-child.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Scenario4ChildComponent } from './scenario4/scenario4-child/scenario4-child.component';
import { Scenario5GPComponent } from './scenario5-gp/scenario5-gp.component';
import { Scenario5Component } from './scenario5-gp/scenario5/scenario5.component';
import { Scenario5GcComponent } from './scenario5-gp/scenario5/scenario5-gc/scenario5-gc.component';
import { Scenario6pComponent } from './scenario6p/scenario6p.component';
import { Scenario6Sib1Component } from './scenario6p/scenario6-sib1/scenario6-sib1.component';
import { Scenario6Sib2Component } from './scenario6p/scenario6-sib2/scenario6-sib2.component';



@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3ParentComponent,
    Scenario3ChildComponent,
    Scenario4Component,
    Scenario4ChildComponent,
    Scenario5GPComponent,
    Scenario5Component,
    Scenario5GcComponent,
    Scenario6pComponent,
    Scenario6Sib1Component,
    Scenario6Sib2Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
