import { TestBed, inject } from '@angular/core/testing';

import { DALService } from './dal.service';

describe('DALService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DALService]
    });
  });

  it('should be created', inject([DALService], (service: DALService) => {
    expect(service).toBeTruthy();
  }));
});
