import { TestBed } from '@angular/core/testing';

import { ChangePasswordValidatorService } from './change-password-validator.service';

describe('ChangePasswordValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangePasswordValidatorService = TestBed.get(ChangePasswordValidatorService);
    expect(service).toBeTruthy();
  });
});
