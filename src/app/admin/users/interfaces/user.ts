export interface IUser {
   id :number
   userName :  string,
   email :  string ,
   country :  string,
   phoneNumber :  number ,
   imagePath : string,
   group : {
       id : number,
       name :  string ,
       creationDate :  string ,
       modificationDate :  string
  },
   creationDate :  string,
   modificationDate :  string
}
