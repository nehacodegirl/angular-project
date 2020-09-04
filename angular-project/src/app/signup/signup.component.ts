import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public fbFormGroup = this.fb.group({
    username: [''],
    emailid: [''],
   password : [''],
   cpassword :['']
    
  });

  

 


  

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
      async signuphere() {
        const data = this.fbFormGroup.value;
        const url = 'http://localhost:3200/adduser';
        await this.http.post(url,data).toPromise();
        this.router.navigate(['signup']);
        this.fbFormGroup.reset();
      }

     
}
