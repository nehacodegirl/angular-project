import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { consoleTestResultHandler } from 'tslint/lib/test';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confess',
  templateUrl: './confess.component.html',
  styleUrls: ['./confess.component.css']
})
export class ConfessComponent implements OnInit {


  public list: any = [];
  constructor(private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

}
