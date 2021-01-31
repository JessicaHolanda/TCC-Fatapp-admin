import { TestBed } from '@angular/core/testing';

import { RegisterActivityValidatorService } from './register-activity-validator.service';

describe('RegisterActivityValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterActivityValidatorService = TestBed.get(RegisterActivityValidatorService);
    expect(service).toBeTruthy();
  });
});
