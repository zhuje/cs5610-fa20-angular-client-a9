import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopicPillsComponent } from './topic-pills.component';

describe('TopicPillsComponent', () => {
  let component: TopicPillsComponent;
  let fixture: ComponentFixture<TopicPillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
