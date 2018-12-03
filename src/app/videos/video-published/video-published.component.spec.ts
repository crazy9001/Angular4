import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPublishedComponent } from './video-published.component';

describe('VideoPublishedComponent', () => {
  let component: VideoPublishedComponent;
  let fixture: ComponentFixture<VideoPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
