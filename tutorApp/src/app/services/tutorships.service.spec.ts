import { TestBed } from '@angular/core/testing';

import { TutorshipsService } from './tutorships.service';

describe('TutorshipsService', () => {
  let service: TutorshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
