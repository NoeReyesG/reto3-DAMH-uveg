import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameFormComponent } from './video-game-form.component';

describe('VideoGameFormComponent', () => {
  let component: VideoGameFormComponent;
  let fixture: ComponentFixture<VideoGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoGameFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
