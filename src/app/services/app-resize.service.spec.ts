import { TestBed } from '@angular/core/testing';

import { AppResizeService } from './app-resize.service';

describe('AppResizeService', () => {
  let service: AppResizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppResizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
