import { TestBed } from '@angular/core/testing';

import { StatWeightsService } from './stat-weights.service';

describe('StatWeightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatWeightsService = TestBed.get(StatWeightsService);
    expect(service).toBeTruthy();
  });
});
