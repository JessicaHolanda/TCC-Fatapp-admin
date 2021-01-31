import { TestBed } from '@angular/core/testing';

import { FatappCoreService } from './fatapp-core-service.service';

describe('FatappCoreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FatappCoreService = TestBed.get(FatappCoreService);
    expect(service).toBeTruthy();
  });
});
