import { TestBed } from '@angular/core/testing';

import { ConclusionsService } from './conclusions.service';

describe('ConclusionsService', () => {
  let service: ConclusionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConclusionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
