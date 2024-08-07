import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { TrackService } from '@modules/tracks/services/track.service';
import { OrderListPipe } from '../../pipe/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-playlist-body',
    templateUrl: './playlist-body.component.html',
    styleUrls: ['./playlist-body.component.css'],
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe]
})
export class PlaylistBodyComponent implements OnInit{
  
  @Input() tracks: TrackModel[] = []
  optionSort:{property:string|null, order:string} ={property:null,order:"desc"}
  constructor(private _TracksServices:TrackService){}

  ngOnInit(): void{
    this._TracksServices.getAllTracks$().subscribe((response:TrackModel[]) =>{
      this.tracks = response;
    })
  }

  changeSort(property:string):void{
    const {order} = this.optionSort
    this.optionSort = {
      property:property,
      order: order==='asc'?'desc':'asc'
    }
  }
}
