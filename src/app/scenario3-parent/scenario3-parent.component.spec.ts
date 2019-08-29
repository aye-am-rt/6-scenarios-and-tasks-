import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3ParentComponent } from './scenario3-parent.component';

describe('Scenario3ParentComponent', () => {
  let component: Scenario3ParentComponent;
  let fixture: ComponentFixture<Scenario3ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
