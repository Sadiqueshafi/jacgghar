import { TestBed } from '@angular/core/testing';

import { JachgharformService } from './jachgharform.service';

describe('JachgharformService', () => {
  let service: JachgharformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JachgharformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
