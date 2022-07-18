import { TestBed } from '@angular/core/testing';

import { MessageeService } from './messagee.service';

describe('MessageeService', () => {
  let service: MessageeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
