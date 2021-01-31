import { TestBed } from '@angular/core/testing';

import { RegisterResourceValidatorService } from './register-resource-validator.service';

describe('RegisterResourceValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterResourceValidatorService = TestBed.get(RegisterResourceValidatorService);
    expect(service).toBeTruthy();
  });
});
