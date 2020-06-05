import { TestBed } from '@angular/core/testing';

import { IetService } from './iet.service';

describe('IetService', () => {
  let service: IetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
