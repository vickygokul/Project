export class BookingModel
{
    uname:string;
    categoryName:string;
    no_Of_Seats:number

    constructor( uname:string, categoryName:string, no_Of_Seats:number)
    {
        this.uname=uname;
        this.categoryName=categoryName;
        this.no_Of_Seats=no_Of_Seats;
    }
}