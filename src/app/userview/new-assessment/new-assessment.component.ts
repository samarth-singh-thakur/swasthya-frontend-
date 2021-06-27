import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.css']
})
export class NewAssessmentComponent implements OnInit {

  constructor() { }
  healthForm = new FormGroup({
    googlefit: new FormControl(''),
    weight: new FormControl(''),

  })
  ngOnInit(): void {
  }

}
