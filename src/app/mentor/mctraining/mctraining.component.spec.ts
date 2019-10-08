import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MctrainingComponent } from './mctraining.component';

describe('MctrainingComponent', () => {
  let component: MctrainingComponent;
  let fixture: ComponentFixture<MctrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MctrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MctrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
