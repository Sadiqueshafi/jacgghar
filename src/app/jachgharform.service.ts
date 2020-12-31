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

  getData(urlPrefix: string, query: any): Observable<any> {
    const url = this.baseURL + urlPrefix
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  getAllData(urlPrefix: string): Observable<any> {
    const url = this.baseURL + urlPrefix
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  postData(urlPrefix: string, query: any): Observable<any> {
    const url = this.baseURL + urlPrefix;
    return this.http.post(url,  query).pipe(
      catchError(this.handleError)
    )
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
