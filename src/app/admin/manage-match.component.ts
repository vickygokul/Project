import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { MatchModel } from '../model/match-model';

@Component({
  selector: 'app-manage-match',
  templateUrl: './manage-match.component.html',
  styleUrls: ['./manage-match.component.css']
})
export class ManageMatchComponent implements OnInit {

  constructor(private service:MatchService) { }

  matchList: any[];
  selectedModel: MatchModel;

  ngOnInit() {
    this.selectedModel=new MatchModel("","","","","");
    this.service.getAll().subscribe((Response)=>
  {
    this.matchList=Response as any[];
  });
  }
  loadProducts()
  {
  this.service.getAll().subscribe((response)=>
  {
    this.matchList=response as any[];
  });
}
  
  create(event){
    this.service.create(event.value).subscribe({
      complete:()=>{
        console.log("completed");
     this.service.getAll().subscribe((response)=>{
      this.matchList=response as any[];
      console.log("Request returns:", this.matchList);
  })
}
    });


  }

}
