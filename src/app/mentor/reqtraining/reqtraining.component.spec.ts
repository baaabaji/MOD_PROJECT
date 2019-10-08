import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqtrainingComponent } from './reqtraining.component';

describe('ReqtrainingComponent', () => {
  let component: ReqtrainingComponent;
  let fixture: ComponentFixture<ReqtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
