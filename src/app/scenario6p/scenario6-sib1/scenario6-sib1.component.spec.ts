import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Sib1Component } from './scenario6-sib1.component';

describe('Scenario6Sib1Component', () => {
  let component: Scenario6Sib1Component;
  let fixture: ComponentFixture<Scenario6Sib1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Sib1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Sib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
