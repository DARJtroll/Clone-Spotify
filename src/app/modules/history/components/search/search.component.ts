import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() callBackData: EventEmitter<any> = new EventEmitter();
  @Input() src:string ='';

  constructor(){}

  search(src:string):void{
    if(src.length >= 3){
      this.callBackData.emit(src)
    }
    
  }
}
