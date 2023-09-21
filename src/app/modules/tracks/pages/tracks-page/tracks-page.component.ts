import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy{

  tracksTrending:Array<TrackModel> = [];
  tracksRandom:Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private _tracksService:TrackService){
    
  }

  async loadDataAll():Promise<any> {
    this.listObservers$.push(this._tracksService.getAllTracks$().subscribe((response:TrackModel[])=>{
      this.tracksTrending = response
      this.tracksRandom = response
    }, err=>{
      console.log("Error Causa",err)
    }))
    
  }

  loadDataRandom():void{
    this.listObservers$.push(this._tracksService.getAllRandom$().subscribe((response:TrackModel[])=>{
      
    },err => {
      console.log("Error de Conexion")
    }))
  }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
    
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(unid =>{
      unid.unsubscribe();
    })
  }

}
