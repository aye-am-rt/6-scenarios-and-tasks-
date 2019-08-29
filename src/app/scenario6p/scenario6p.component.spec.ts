import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6pComponent } from './scenario6p.component';

describe('Scenario6pComponent', () => {
  let component: Scenario6pComponent;
  let fixture: ComponentFixture<Scenario6pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
