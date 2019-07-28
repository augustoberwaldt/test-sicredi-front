import { Component, OnInit } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  public data: Object;
  public temp_var: Object = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let headers = new HttpHeaders();
    //   headers.set('Accept-Language', 'en-US');
    this.http
      .get('http://localhost:8080/v1/schedule/getSchedules', {
        headers: headers
      })
      .subscribe((res: Response) => {
        // console.log('dados', res);
        this.data = res;
        this.temp_var = true;
      });
  }
}
