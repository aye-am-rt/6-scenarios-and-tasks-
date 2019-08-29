import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5GcComponent } from './scenario5-gc.component';

describe('Scenario5GcComponent', () => {
  let component: Scenario5GcComponent;
  let fixture: ComponentFixture<Scenario5GcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5GcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5GcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
