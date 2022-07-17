import { TestBed } from '@angular/core/testing';

import { SelectSearchBarEventService } from './select-search-bar-event.service';

describe('SelectSearchBarEventService', () => {
  let service: SelectSearchBarEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectSearchBarEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
