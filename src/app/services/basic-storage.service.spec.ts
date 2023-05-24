import { TestBed } from '@angular/core/testing';

import { BasicStorageService } from './basic-storage.service';

describe('BasicStorageService', () => {
  let service: BasicStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
