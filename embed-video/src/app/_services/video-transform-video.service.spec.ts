import { TestBed } from '@angular/core/testing';

import { VideoTransformVideoService } from './video-transform-video.service';

describe('VideoTransformVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoTransformVideoService = TestBed.get(VideoTransformVideoService);
    expect(service).toBeTruthy();
  });
});
