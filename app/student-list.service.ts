import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './Student';
import { Observable } from 'rxjs';


@Injectable()
export class StudentListService {

  
  // Add dependency in service constructor for httpclient 
  constructor(private http:HttpClient) 
 {

  }

  private _url:string = "/assets/Data/Student.json";

 // Write method in service class which returns array 
 // of batch details
 
GetBatchDetails():Observable<IStudent[]>
{
  return this.http.get<IStudent[]>(this._url);
}

}