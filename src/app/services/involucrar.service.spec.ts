import { TestBed } from '@angular/core/testing';

import { InvolucrarService } from './involucrar.service';

describe('InvolucrarService', () => {
  let service: InvolucrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvolucrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
