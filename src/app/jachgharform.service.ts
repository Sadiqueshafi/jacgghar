import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{BloodGrouping} from '../app/bloodlist/bloodgrouping';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JachgharformService {
  arr =[];
  private messageSource = new BehaviorSubject<string>("default message");
  currentmessage = this.messageSource.asObservable();
  baseURL: string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }
  changemessage(message:string){
    this.messageSource.next(message);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  bloodsetdata(){
    // var patitentDetail =JSON.parse(localStorage.getItem('JhachgharData'));
    // this.arr.push(patitentDetail);
    // console.log(this.arr);
    // this.r = patitentDetail.map(items=>{

    // })

  }

  postData(person:BloodGrouping): Observable<any> {
    const headers ={'content-type':'application.json'}
    const body= JSON.stringify(person);
    console.log(body);
    // const url =  urlPrefix
    return this.http.post(this.baseURL+'bloodgrouping',body,{'headers':headers}).pipe(
      catchError(this.handleError)
    )
  }

  getdata(): Observable<BloodGrouping[]> {
    // const url = urlPrefix;
    return this.http.get<BloodGrouping[]>(this.baseURL+'bloodgrouping');
  }

  delete(postId:string): Observable<any>{
    return this.http.delete('http://localhost:8080/gachgharform/'+ postId );
  }

  update(docker:any):Observable<void>{
  return this.http.put<void>('http://localhost:8080/gachgharform/' + docker.id,docker)

  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error.msg;
    }
    return throwError(errorMessage);
  }
}
