import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: any;
  age: number = 22;
  emps = ['ahmed', 'ali', 'heba', 'ola'];
  manger = this.emps[2];
  price: number = 20;
  studentsList = [
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
  ];
  toDo = [
    "title one", "title two"
  ];
  selectedItem: any;
  i: any;

  constructor() { }

  ngOnInit() {
    this.name = 99;
  }

  onAddItem(listItem) {
    this.toDo.push(this.selectedItem);
  }

  onDeleteItem(i) {
    this.toDo.splice(i, 1);
  }

}
