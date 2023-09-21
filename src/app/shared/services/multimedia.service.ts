import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>; 
  
  myObservable1$:Subject<any> = new Subject();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)

  public audio! : HTMLAudioElement //TODO <audio>
  public timeElapsed$:BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$:BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$:BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPorcentaje$:BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor() { 
      this.audio = new Audio()
      this.trackInfo$.subscribe(responseOK=>{
        if(responseOK){
          this.setAudio(responseOK);
        }
      });
    /* setTimeout(()=>{
      this.myObservable1$.next("SubjectNext n");
    },1000)
    
    setTimeout(()=>{
      this.myObservable1$.error("Error");
    },2000) */
    this.lissAllEvent();
  }
  private lissAllEvent():void{
    this.audio.addEventListener('timeupdate',this.calculateTime,false);
    this.audio.addEventListener('playing',this.setPlayerStatus,false);
    this.audio.addEventListener('play',this.setPlayerStatus,false);
    this.audio.addEventListener('pause',this.setPlayerStatus,false);
    this.audio.addEventListener('ended',this.setPlayerStatus,false);

  }
  private setPlayerStatus = (state:any) => {
    switch(state.type){
      case 'play':
        this.playerStatus$.next("play")
        break;

      case 'playing':
          this.playerStatus$.next("playing")
          break;
      
      case 'paused':
        this.playerStatus$.next("paused")
        break;

      default:
        this.playerStatus$.next("paused")
        break;
    }
  }

  private calculateTime = () => {
    const{duration,currentTime} = this.audio
    //console.table([duration,currentTime])
    this.timeElapsed(currentTime);
    this.setTimeRemaining(currentTime,duration);
    this.setPorcentaje(currentTime,duration);
  }

  private timeElapsed(currentTime: number):void{
    let seconds = Math.floor(currentTime%60);
    let minutes = Math.floor(currentTime/60)%60;

    const displaySecond = (seconds<10) ? `0${seconds}` :seconds;
    const displayMinute = (minutes<10) ? `0${minutes}` :minutes;

    const displayAll = `${displayMinute}:${displaySecond}`

    this.timeElapsed$.next(displayAll);
  }

  private setTimeRemaining(currentTime:number,duration:number){
    let timeLeft = duration-currentTime;
    let seconds = Math.floor(timeLeft%60);
    let minutes = Math.floor(timeLeft/60)%60;

    const displaySecond = (seconds<10) ? `0${seconds}` :seconds;
    const displayMinute = (minutes<10) ? `0${minutes}` :minutes;

    const displayAll = `-${displayMinute}:${displaySecond}`

    this.timeRemaining$.next(displayAll);
  }

  private setPorcentaje(currentTime:number,duration:number):void{
    //TODO duration --> 100%
    //TODO currentTime --> x%
    let porcentaje = (currentTime * 100) / duration;
    this.playerPorcentaje$.next(porcentaje)
  }

  public setAudio(track:TrackModel):void{
    this.audio.src = track.url
    this.audio.play()
  }

  public tooglePlay():void{
    if(this.audio.paused){this.audio.play()}else{this.audio.pause()}
  }

  public seekAudio(percentage:number):void{
    const {duration} = this.audio
    // 100% --> duration
    // 70% --> timecurrent

    const porcentajeATiempo =(percentage*duration) / 100
    //console.log(porcentajeATiempo)

    this.audio.currentTime = porcentajeATiempo;
  }
}
