import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  DateBehaviour = new BehaviorSubject<any>('');
  currentDateBehavoiur= this.DateBehaviour.asObservable();


  constructor() { } 

  DateChange(date:any){
    this.DateBehaviour.next(date);
  }
}
