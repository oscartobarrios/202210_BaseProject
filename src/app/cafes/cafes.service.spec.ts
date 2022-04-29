/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafesService } from './cafes.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Cafes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafesService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([CafesService], (service: CafesService) => {
    expect(service).toBeTruthy();
  }));
});
