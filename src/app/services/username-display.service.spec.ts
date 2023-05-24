import { TestBed } from '@angular/core/testing';

import { UsernameDisplayService } from './username-display.service';

describe('UsernameDisplayService', () => {
  let service: UsernameDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
