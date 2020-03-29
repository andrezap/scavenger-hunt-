import { TestBed } from '@angular/core/testing';

import { CorrectnessService } from './correctness.service';

describe('CorrectnessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorrectnessService = TestBed.get(CorrectnessService);
    expect(service).toBeTruthy();
  });
});
