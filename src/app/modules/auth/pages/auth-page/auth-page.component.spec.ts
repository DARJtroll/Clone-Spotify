import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthPageComponent } from './auth-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AuthPageComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
});
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //TODO: Debe asegurarse que el formulario sea invalido cuando ingrese datos erroneos
  // Patron AAA  Arrancar , Actuar , Asegurar
  //              Arrange  , act , Assert 
  it('Deberia retornar invalido el formulario',()=>{
      const  mockCredenciales = {
        email:'0x0x0x0x0x0x0x0x0x0',
        password: '1111111111111111111111111111111111111111',
    }
    const emailForm:any = component.formLogin.get('email')
    const passwordForm:any = component.formLogin.get('password')

    //ACT

    emailForm.setValue(mockCredenciales.email);
    passwordForm.setValue(mockCredenciales.password);

    //Assert

    expect(component.formLogin.invalid).toEqual(true);
  });

  it('👍 El boton deberia de tener la palabra "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
