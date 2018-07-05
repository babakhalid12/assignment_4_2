import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JsonreadingComponent } from './jsonreading/jsonreading.component';
import { StudentListService } from './student-list.service'; 
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    JsonreadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
