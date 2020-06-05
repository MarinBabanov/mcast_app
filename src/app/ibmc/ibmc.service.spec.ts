import { TestBed } from '@angular/core/testing';

import { IbmcService } from './ibmc.service';

describe('IbmcService', () => {
  let service: IbmcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbmcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
