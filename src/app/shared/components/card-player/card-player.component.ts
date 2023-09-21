import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit{
  @Input() mode:'small' | 'big' = 'big';
  @Input() track:TrackModel = {
    name: '',
    album: '',
    cover: '',
    url: '',
    _id: ''
  };
  
  constructor(private _multimediaService: MultimediaService){}

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel):void{
    this._multimediaService.trackInfo$.next(track)
  }

}
