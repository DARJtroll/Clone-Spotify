import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

//Componente
@Component({
  template:'<img appImgBroken class="TestingDirectiva" [src]="srcMock">'
})

class TestComponent {
  public srcMock:any = null
}

describe('ImgBrokenDirective', () => {

  let component:TestComponent;
  let fixture:ComponentFixture<TestComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture= TestBed.createComponent(TestComponent)
    component = fixture.componentInstance

    fixture.detectChanges()

  });

  //TODO se deberia crear una instancia correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('Instancia de Testcomponent',()=>{
    expect(component).toBeTruthy()
  });

  it('Testeando la Directiva, se debe cambiar la imagen',(done: DoneFn)=>{
    //Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.TestingDirectiva')).nativeElement
    const beforeImgSrc = beforeImgElement.src
    component.srcMock = undefined

    setTimeout(()=>{
      const afterImgElement = fixture.debugElement.query(By.css('.TestingDirectiva')).nativeElement
      const afterImgSrc = beforeImgElement.src
      
    expect(afterImgSrc).toMatch(/\bgremlim.jpg\b/)
    done()
    }, 3000)

    

  })

});
