import { Injectable } from '@angular/core';
import { MatchModel } from '../model/match-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



const matches: MatchModel[]=[
  { date: "5/9/18", timing: "5:30 PM", stadium:"Chepauk",teamAName:"CSK",teamBName:"BLR"},
  { date: "7/9/18", timing: "5:30 PM", stadium:"Chepauk",teamAName:"BLR",teamBName:"MI"},
  { date: "9/9/18", timing: "5:30 PM", stadium:"Chepauk",teamAName:"HYD",teamBName:"HYD"},
  { date: "11/9/18", timing: "5:30 PM", stadium:"Chepauk",teamAName:"MI",teamBName:"DD"}
]



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchList: MatchModel[];

  constructor(private http:HttpClient) {
    this.matchList=matches;

   }
   matchUrl: string="http://localhost:9008/AdminService";
   Url: string="http://localhost:9008/AdminService";
   getAll(){
    this.Url = this.Url + "/api/Matchall";
     return this.http.get(this.Url);
   }
   getDetails(id: number){
     let url=this.matchUrl + "/" +id;
     return this.http.get<MatchModel>(url);
   }
   create(item:MatchModel){
    this.matchUrl = this.matchUrl + "/api/Match";
     let body=JSON.stringify(item);
     let httpOptions={
       headers:new HttpHeaders({
         "Content-Type":"application/json"
       })
     }
     console.log(body);
     return this.http.post(this.matchUrl,body,httpOptions);
  
   }
  }
