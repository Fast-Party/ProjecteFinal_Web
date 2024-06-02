import { TestBed } from '@angular/core/testing';

import { PopupUserWithoutAccountService } from './popup-user-without-account.service';

describe('PopupUserWithoutAccountService', () => {
  let service: PopupUserWithoutAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupUserWithoutAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
