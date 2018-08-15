import { TestBed, inject } from '@angular/core/testing';

import { SelectBlackboxService } from './select-blackbox.service';

describe('SelectBlackboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectBlackboxService]
    });
  });

  it('should be created', inject([SelectBlackboxService], (service: SelectBlackboxService) => {
    expect(service).toBeTruthy();
  }));
});
