import { TestBed } from '@angular/core/testing';

import { ForgetPasswordValidatorService } from './forget-password-validator.service';

describe('ForgetPasswordValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgetPasswordValidatorService = TestBed.get(ForgetPasswordValidatorService);
    expect(service).toBeTruthy();
  });
});
