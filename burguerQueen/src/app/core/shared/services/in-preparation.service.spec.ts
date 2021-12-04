import { TestBed } from '@angular/core/testing';

import { InPreparationService } from './in-preparation.service';

describe('InPreparationService', () => {
  let service: InPreparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InPreparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
