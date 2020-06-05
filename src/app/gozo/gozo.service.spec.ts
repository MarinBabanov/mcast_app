import { TestBed } from '@angular/core/testing';

import { GozoService } from './gozo.service';

describe('GozoService', () => {
  let service: GozoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GozoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
