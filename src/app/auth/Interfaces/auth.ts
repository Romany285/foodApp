export interface ILogin {
  email:string;
  password:string
}
export interface IRegister {
  email:string;
  userName:string;
  phoneNumber:string;
  country:string;
  password:string;
  confirmPassword:string
}
export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export interface IGetProfile
{
   id: number;
   userName :string ;
   email :  string ;
   country :  string ;
   phoneNumber :  number ;
   imagePath :  string ;
   group : {
     id : number;
     name :  string ;
     creationDate :  string;
     modificationDate : string
  };
   creationDate :  string;
   modificationDate :  string
}
