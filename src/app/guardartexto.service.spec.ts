import { TestBed } from '@angular/core/testing';

import { GuardartextoService } from './guardartexto.service';

describe('GuardartextoService', () => {
  let service: GuardartextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardartextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
