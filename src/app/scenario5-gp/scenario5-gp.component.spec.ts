import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5GPComponent } from './scenario5-gp.component';

describe('Scenario5GPComponent', () => {
  let component: Scenario5GPComponent;
  let fixture: ComponentFixture<Scenario5GPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5GPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5GPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
