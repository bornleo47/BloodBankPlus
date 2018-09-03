import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  today: number = Date.now();
  
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.adminservice.DateChange(this.today);
  }




}

