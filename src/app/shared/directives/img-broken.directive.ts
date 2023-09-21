import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() srcAlternativo: string = '';
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    elNative.src = '../../../assets/images/gremlim.jpg'
    //elNative.src = this.srcAlternativo
  }
  //TODO: host Host HOST
  constructor(private elHost: ElementRef) { 
    
  }

}
