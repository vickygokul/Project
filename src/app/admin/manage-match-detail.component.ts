import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatchModel } from '../model/match-model';

@Component({
  selector: 'app-manage-match-detail',
  templateUrl: './manage-match-detail.component.html',
  styleUrls: ['./manage-match-detail.component.css']
})
export class ManageMatchDetailComponent implements OnInit {
  @Input() model: MatchModel;
  @Output() createEvent: EventEmitter<any>=new EventEmitter<any>();
  @Output() updateEvent: EventEmitter<any>=new EventEmitter<any>();
    constructor() { }
  
    ngOnInit() {
    }
  
  
  saveData(){
    
      this.createEvent.emit({value: this.model});
    
  }
  
  
  cancel(){
  
  
  }

}
