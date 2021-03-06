import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-jsonreading',
  templateUrl: './jsonreading.component.html',
  styleUrls: ['./jsonreading.component.css']
})
export class JsonreadingComponent{

  public batches = [];

  // Add instance of Service in constructor
  constructor(private _StudentListService:StudentListService)
  {
  }

  // Call the service method once
  fun() 
  {
    this._StudentListService.GetBatchDetails()
    .subscribe(data=>this.batches=data);
  }
}

