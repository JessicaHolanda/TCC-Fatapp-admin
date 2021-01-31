import { TestBed } from '@angular/core/testing';

import { EditAccountValidatorService } from './edit-account-validator.service';

describe('EditAccountValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditAccountValidatorService = TestBed.get(EditAccountValidatorService);
    expect(service).toBeTruthy();
  });
});
