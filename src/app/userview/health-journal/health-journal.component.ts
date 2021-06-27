import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-health-journal',
  templateUrl: './health-journal.component.html',
  styleUrls: ['./health-journal.component.css']
})
export class HealthJournalComponent implements OnInit {

  constructor() { }
  userForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }

}
