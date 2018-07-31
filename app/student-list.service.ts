import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './Student';
import { Observable } from 'rxjs';


@Injectable()
export class StudentListService {

  
  
  constructor(private http:HttpClient) 
 {

  }

  private _url:string = "/assets/Data/Student.json";

 
 
 
GetBatchDetails():Observable<IStudent[]>
{
  return this.http.get<IStudent[]>(this._url);
}

}
