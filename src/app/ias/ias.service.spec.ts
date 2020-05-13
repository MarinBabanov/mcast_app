import { TestBed } from '@angular/core/testing';

import { IasService } from './ias.service';

describe('IasService', () => {
  let service: IasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
