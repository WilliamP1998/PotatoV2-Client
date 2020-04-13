import { TestBed, inject } from '@angular/core/testing';

import { GroupdataService } from './groupdata.service';

describe('GroupdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupdataService]
    });
  });

  it('should be created', inject([GroupdataService], (service: GroupdataService) => {
    expect(service).toBeTruthy();
  }));
});
