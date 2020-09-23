import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User}from './user.model';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private authStatusListner = new Subject<boolean>();
 showSuccessMessage:boolean;
 servererrorMessage:string;
// selectedUser:User={
// fullName:'',
// email:'',
// password:''
// }
  constructor(private http:HttpClient,private router:Router) { }
  getAuthStatusListner(){
    return this.authStatusListner.asObservable();
  }
  createUser(fullName:string,email: string,password:string){
    const authData:User={fullName:fullName,email:email,password:password};
    this.http.post('http://localhost:3000/api/register',authData).subscribe(()=>{
     this.router.navigate[''];
    res =>{
      this.showSuccessMessage =true;
      setTimeout(() => {
        this.showSuccessMessage =false,4000
      });
    }
   },error=>{
    //  this.authStatusListner.next(false);
    if(error.status === 422){
      this.servererrorMessage = error.error.join('<br />')
    }
   });
  }
}
