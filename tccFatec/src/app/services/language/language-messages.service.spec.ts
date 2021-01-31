import { TestBed } from '@angular/core/testing';

import { LanguageMessagesService } from './language-messages.service';

describe('LanguageMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageMessagesService = TestBed.get(LanguageMessagesService);
    expect(service).toBeTruthy();
  });
});
