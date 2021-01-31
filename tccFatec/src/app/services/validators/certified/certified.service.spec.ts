import { TestBed } from '@angular/core/testing';

import { CertifiedValidatorService } from './certified.service';

describe('CertifiedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CertifiedValidatorService = TestBed.get(CertifiedValidatorService);
    expect(service).toBeTruthy();
  });
});
