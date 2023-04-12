import { TestBed } from '@angular/core/testing';

import { GetGamesByService } from './get-games-by.service';

describe('GetGamesByService', () => {
  let service: GetGamesByService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGamesByService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
