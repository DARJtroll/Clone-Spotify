import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sessionGuard } from './session.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('Testing of Session Guard', () => {
  let guard: sessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
      ]
    });
    guard = TestBed.inject(sessionGuard);
  });

  //TODO La primera pregunta 
  it('should be created', () => {
    expect(guard).toBeTruthy();  //TODO no se cumple pipipi
  });
});
