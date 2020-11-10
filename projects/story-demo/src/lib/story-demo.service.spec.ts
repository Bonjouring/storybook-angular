import { TestBed } from '@angular/core/testing';

import { StoryDemoService } from './story-demo.service';

describe('StoryDemoService', () => {
  let service: StoryDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
