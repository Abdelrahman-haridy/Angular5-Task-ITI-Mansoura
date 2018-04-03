import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  name: string = "ahmed";
  track: string;
  emps = ['ahmed', 'ali', 'heba', 'ola'];
  manger = this.emps[2];
  empsList = [
    {
      name: "sara",
      age: 22
    },
    {
      name: "abdo",
      age: 30
    },
    {
      name: "mohammed",
      age: 50
    },
    {
      name: "salah",
      age: 40
    },
  ];
  

  constructor() { }

  ngOnInit() {
    
  }

  getName(val: string) {
    this.name = val;
  }


}
