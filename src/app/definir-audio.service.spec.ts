import { TestBed } from '@angular/core/testing';

import { DefinirAudioService } from './definir-audio.service';

describe('DefinirAudioService', () => {
  let service: DefinirAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefinirAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
