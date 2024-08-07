import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]',
    standalone: true
})
export class ImgBrokenDirective {
  @Input() srcAlternativo: string | boolean = false;
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    
    //elNative.src = this.srcAlternativo
    if(this.srcAlternativo){
      elNative.src = this.srcAlternativo
    }else{
      elNative.src = '/assets/images/gremlim.jpg'
    }
  }
  //TODO: host Host HOST
  constructor(private elHost: ElementRef) { 
    
  }

}
