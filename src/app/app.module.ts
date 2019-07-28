import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import { SessionModalComponent } from './session-modal/session-modal.component';
import { VoteModalComponent } from './vote-modal/vote-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateScheduleComponent,
    HomePageComponent,
    ScheduleListComponent,
    ModalComponent,
    SessionModalComponent,
    VoteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
