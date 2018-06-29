import { TestBed, inject } from '@angular/core/testing';

import { WeirdmessageService } from './weirdmessage.service';

describe('WeirdmessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeirdmessageService]
    });
  });

  it('should be created', inject([WeirdmessageService], (service: WeirdmessageService) => {
    expect(service).toBeTruthy();
  }));
});
