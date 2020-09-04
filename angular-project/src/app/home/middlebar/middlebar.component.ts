import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { consoleTestResultHandler } from 'tslint/lib/test';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() { }
  
}
@Component({
  selector: 'app-middlebar',
  templateUrl: './middlebar.component.html',
  styleUrls: ['./middlebar.component.css']
})
export class MiddlebarComponent implements OnInit {



  public title = 'black-app';
  public list: any = [];

  // Services :: Injection :: Singelton :: Short Syntax
  /*private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }*/
  constructor(private http: HttpClient) {}

  public ngOnInit() {
    console.log('ON.INIT.');
    this.makeAjaxCall();
  }

  async makeAjaxCall() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const results = await this.http.get(url).toPromise();
    this.list = results;
  }
  async makePostApiCall() {
    const userJson = {
      username: 'Akshay Kumar',
      emailid: 'akshay@gmail.com',
      password: '1234',
      cpassword: '1234'
      
    };

    const url = 'http://localhost:3200/adduser';
    const output = await this.http.post(url, userJson).toPromise();
    console.log(output);
  }
  

}
