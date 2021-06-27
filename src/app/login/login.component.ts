import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public asuser: boolean = false;
  public asdoctor: boolean = false;
  constructor() { }
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  user() {
    console.log("something")
    this.asuser = true;
  }

  doctor() {
    this.asdoctor = true;
  }
  ngOnInit(): void {
  }

}
