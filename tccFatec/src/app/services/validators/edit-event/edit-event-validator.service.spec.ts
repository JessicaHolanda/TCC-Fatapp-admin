import { TestBed } from '@angular/core/testing';

import { EditEventValidatorService } from './edit-event-validator.service';

describe('EditEventValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditEventValidatorService = TestBed.get(EditEventValidatorService);
    expect(service).toBeTruthy();
  });
});
