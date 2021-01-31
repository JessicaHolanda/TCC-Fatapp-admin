import { TestBed } from '@angular/core/testing';

import { EditCourseValidatorService } from './edit-course-validator.service';

describe('EditCourseValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditCourseValidatorService = TestBed.get(EditCourseValidatorService);
    expect(service).toBeTruthy();
  });
});
