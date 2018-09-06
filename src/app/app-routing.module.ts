import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminBloodAddComponent } from './components/admin-blood-add/admin-blood-add.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { ViewEventComponent } from './components/event/view-event/view-event.component';

const routes: Routes = [
  {path: 'addblood', component: AdminBloodAddComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'events', component: ViewEventComponent},
  {path: 'addevent', component: AddEventComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
