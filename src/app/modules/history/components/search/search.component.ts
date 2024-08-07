import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
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
