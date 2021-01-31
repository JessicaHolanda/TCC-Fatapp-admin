import { TestBed } from '@angular/core/testing';

import { AddResourceValidatorService } from './add-resource-validator.service';

describe('AddResourceValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddResourceValidatorService = TestBed.get(AddResourceValidatorService);
    expect(service).toBeTruthy();
  });
});
