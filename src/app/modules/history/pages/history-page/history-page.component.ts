import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.module';
import { SearchServiceService } from '@modules/history/services/search-service.service';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  listResults$:Observable<any> = of([]);
  constructor(private _searchService:SearchServiceService){}

  recibirData(event:string):void{
    this.listResults$ = this._searchService.searchTracks$(event);
  }
}
