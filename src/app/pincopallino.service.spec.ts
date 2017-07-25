import { TestBed, inject } from '@angular/core/testing';

import { PincopallinoService } from './pincopallino.service';

describe('PincopallinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PincopallinoService]
    });
  });

  it('should be created', inject([PincopallinoService], (service: PincopallinoService) => {
    expect(service).toBeTruthy();
  }));
});
