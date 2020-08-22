import { TestBed } from '@angular/core/testing';

import { NglibService } from './nglib.service';

describe('NglibService', () => {
  let service: NglibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NglibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
