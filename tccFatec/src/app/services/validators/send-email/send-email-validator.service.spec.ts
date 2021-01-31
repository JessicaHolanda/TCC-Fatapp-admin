import { TestBed } from '@angular/core/testing';

import { SendEmailValidatorService } from './send-email-validator.service';

describe('SendEmailValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendEmailValidatorService = TestBed.get(SendEmailValidatorService);
    expect(service).toBeTruthy();
  });
});
