import { TestBed } from '@angular/core/testing';

import { AddRoomValidatorService } from './add-room-validator.service';

describe('AddRoomValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRoomValidatorService = TestBed.get(AddRoomValidatorService);
    expect(service).toBeTruthy();
  });
});
