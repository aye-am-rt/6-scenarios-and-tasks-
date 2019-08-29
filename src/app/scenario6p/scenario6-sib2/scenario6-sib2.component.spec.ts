import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Sib2Component } from './scenario6-sib2.component';

describe('Scenario6Sib2Component', () => {
  let component: Scenario6Sib2Component;
  let fixture: ComponentFixture<Scenario6Sib2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Sib2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Sib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
