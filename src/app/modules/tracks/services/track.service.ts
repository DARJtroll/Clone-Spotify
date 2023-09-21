import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  private readonly URL = environment.api;

  private skipById(listTrack: TrackModel[],id:number):Promise<TrackModel[]>{
    return new Promise((resolve,reject) =>{
      const listTmp = listTrack.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  constructor(private _httpClient:HttpClient) { 

  }

  /**
   * 
   * @returns Devolver todas las canciones! molonas!
   */
  getAllTracks$():Observable<any> {

    return this._httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data}:any) =>{
        return data
      },)
    ); 
  }

    /**
   * 
   * @returns Devolver todas las canciones! random
   */
    getAllRandom$():Observable<any> {

      return this._httpClient.get(`${this.URL}/tracks`).pipe(
        mergeMap(({data}:any) =>this.skipById(data,1)),
        catchError((err) =>{
          const {status,statusText} = err;
          
          console.log("Surgio un error",[status,statusText])
          return of([])
        })
      )
    }
}
