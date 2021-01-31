import { TestBed } from '@angular/core/testing';

import { ChangeAccessPerfilService } from './change-access-perfil.service';

describe('ChangeAccessPerfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeAccessPerfilService = TestBed.get(ChangeAccessPerfilService);
    expect(service).toBeTruthy();
  });
});
