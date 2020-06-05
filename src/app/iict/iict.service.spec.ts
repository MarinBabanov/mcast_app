import { TestBed } from '@angular/core/testing';

import { IictService } from './iict.service';

describe('IictService', () => {
  let service: IictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
