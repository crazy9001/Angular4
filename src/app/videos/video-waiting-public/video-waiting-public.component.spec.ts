import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWaitingPublicComponent } from './video-waiting-public.component';

describe('VideoWaitingPublicComponent', () => {
  let component: VideoWaitingPublicComponent;
  let fixture: ComponentFixture<VideoWaitingPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWaitingPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWaitingPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
