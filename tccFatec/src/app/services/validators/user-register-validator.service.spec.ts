import { TestBed } from '@angular/core/testing';

import { UserRegisterValidatorService } from './user-register-validator.service';

describe('UserRegisterValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegisterValidatorService = TestBed.get(UserRegisterValidatorService);
    expect(service).toBeTruthy();
  });
});
