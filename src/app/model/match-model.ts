export class MatchModel {
   
    date:string;
    timing:string;
    stadium:string;
    teamAName:string;
    teamBName:string;

    constructor(date,timing,stadium,teamAName,teamBName){
     
        this.date=date;
        this.timing=timing;
        this.stadium=stadium;
        this.teamAName=teamAName;
        this.teamBName=teamBName;
    }
}