import { TestBed } from '@angular/core/testing';

import { ServitestService } from './servitest.service';

describe('ServitestService', () => {
  let service: ServitestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServitestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
