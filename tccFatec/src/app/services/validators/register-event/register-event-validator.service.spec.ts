import { TestBed } from '@angular/core/testing';

import { RegisterEventValidatorService } from './register-event-validator.service';

describe('RegisterEventValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterEventValidatorService = TestBed.get(RegisterEventValidatorService);
    expect(service).toBeTruthy();
  });
});
