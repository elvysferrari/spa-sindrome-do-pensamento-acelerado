import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineHumorPage } from './timeline-humor.page';

describe('TimelineHumorPage', () => {
  let component: TimelineHumorPage;
  let fixture: ComponentFixture<TimelineHumorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineHumorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineHumorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
