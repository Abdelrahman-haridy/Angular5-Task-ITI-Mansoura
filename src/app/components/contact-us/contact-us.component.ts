import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formObj = {
    userName: "abhar",
    personalInfo: {
      firstName: "abdo",
      lastName: "haridy",
    },
    email: "abdelrahman.haridy01@gmail.com",
    subject: "title",
    massege: "examlpe"
  };
  constructor() { }

  ngOnInit() {
  }

  getForm(val) {
    this.formObj = val;
    console.log(this.formObj);
  }

}
