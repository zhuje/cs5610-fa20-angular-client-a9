import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LessonTabsComponent } from './lesson-tabs.component';

describe('LessonTabsComponent', () => {
  let component: LessonTabsComponent;
  let fixture: ComponentFixture<LessonTabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
