import { TestBed } from '@angular/core/testing';

import { RegisterCourseValidatorService } from './register-course.service';

describe('RegisterCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterCourseValidatorService = TestBed.get(RegisterCourseValidatorService);
    expect(service).toBeTruthy();
  });
});
