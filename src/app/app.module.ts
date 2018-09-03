import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminBloodAddComponent } from './components/admin-blood-add/admin-blood-add.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { DateComponent } from './date/date.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminHeaderComponent,
    AdminBloodAddComponent,
    AddUserComponent,
    AddEventComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
