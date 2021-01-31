import { TestBed } from '@angular/core/testing';

import { RegisterSpeakerValidatorService } from './register-speaker-validator.service';

describe('RegisterSpeakerValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterSpeakerValidatorService = TestBed.get(RegisterSpeakerValidatorService);
    expect(service).toBeTruthy();
  });
});
