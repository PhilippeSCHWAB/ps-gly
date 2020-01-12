import { TestBed } from '@angular/core/testing';

import { GlycemielistalimentService } from './glycemielistaliment.service';

describe('GlycemielistalimentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlycemielistalimentService = TestBed.get(GlycemielistalimentService);
    expect(service).toBeTruthy();
  });
});
