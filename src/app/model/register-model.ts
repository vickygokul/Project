

export class RegisterModel {

    firstname:string;
    lastname:string;
    username:string;
    password:string;
    mobileNo:number;
    email:string

    constructor( firstname:string,lastname:string,username:string,email:string,password:string,
        mobileNo:number)
         {
    
        this.firstname = firstname;
        this.lastname=lastname;
        this.username=username;
        this.email=email;
        this.password=password;
        this.mobileNo=mobileNo;
        
    }
}
