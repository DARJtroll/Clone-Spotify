import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as mockRaw from 'src/app/data/user.json'
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser:any = (mockRaw as any).default
  let httpClientSpy:{post:jasmine.Spy}
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post'])
    //service = TestBed.inject(AuthService);
    service = new AuthService(httpClientSpy as any)
  });

  it('Debe retornar un objeto con "data" y "token session" XD',(done:DoneFn)=>{
    const user:any = mockUser.userOk
    const mockResponse = {
      data:{},
      tokenSession:'0x0x0x0x0x0'
    }
    httpClientSpy.post.and.returnValue(
      of(mockResponse) //TODO ya es observable
    )//TODO la api va a responder

    //ACT
    service.sendCredentials(user.email,user.password)
      .subscribe(responseApi=>{ 
        const getPropiedades = Object.keys(responseApi) // --> [data,tokenSession]
        expect(getPropiedades).toContain('data')
        expect(getPropiedades).toContain('tokenSession')
        done()
      })
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
