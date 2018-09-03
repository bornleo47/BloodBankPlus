import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-blood-add',
  templateUrl: './admin-blood-add.component.html',
  styleUrls: ['./admin-blood-add.component.css']
})
export class AdminBloodAddComponent implements OnInit {

  onClickSubmit(f){
    console.log(f.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
