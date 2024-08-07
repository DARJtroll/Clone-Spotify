import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css'],
    standalone: true,
    imports: [NgTemplateOutlet, NgIf, ImgBrokenDirective, NgClass, AsyncPipe]
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')
  mockCover!: TrackModel 
  state:string = 'paused'
  listOberservers$: Array<Subscription> = []

  constructor(public _multimediaService: MultimediaService){
    
  }


  ngOnInit():void{
    
    const oberserver1 = this._multimediaService.playerStatus$.subscribe(status=>this.state=status);
    this.listOberservers$ = [oberserver1]
    /* const observable1$ = this._multimediaService.myObservable1$.subscribe(
      (responseOk)=>{
        console.log("Exitos del Ok 😀",responseOk)
      },
      (responseFail)=>{
        console.log("Salio un Error 😡",responseFail)
      }
    ) */
  }
  ngOnDestroy(): void {
    this.listOberservers$.forEach(u =>{
      u.unsubscribe();
    });
  }

  handlePosition(mouse: MouseEvent):void{
    const elNative:HTMLElement = this.progressBar.nativeElement
    const {clientX} = mouse
    const {x,width} = elNative.getBoundingClientRect();
    const xDistance = clientX - x;

    const porcentaje = (xDistance * 100) / width
    //console.log(width," // " , xDistance,"//",porcentaje)
    this._multimediaService.seekAudio(porcentaje);
  }

}
