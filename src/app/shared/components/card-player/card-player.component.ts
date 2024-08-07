import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.css'],
    standalone: true,
    imports: [NgIf, ImgBrokenDirective, NgClass]
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
