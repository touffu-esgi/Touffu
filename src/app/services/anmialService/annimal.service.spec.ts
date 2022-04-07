import { TestBed } from '@angular/core/testing';

import {AnnimalService} from './annimal.service';

describe('AnnimalService', () => {
  let service: AnnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
