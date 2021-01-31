import { TestBed } from '@angular/core/testing';

import { EditSpeakerValidatorService } from './edit-speaker-validator.service';

describe('EditSpeakerValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditSpeakerValidatorService = TestBed.get(EditSpeakerValidatorService);
    expect(service).toBeTruthy();
  });
});
