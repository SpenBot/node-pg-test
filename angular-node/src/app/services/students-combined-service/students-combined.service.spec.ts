import { TestBed, inject } from '@angular/core/testing';

import { StudentsCombinedService } from './students-combined.service';

describe('StudentsCombinedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsCombinedService]
    });
  });

  it('should be created', inject([StudentsCombinedService], (service: StudentsCombinedService) => {
    expect(service).toBeTruthy();
  }));
});
