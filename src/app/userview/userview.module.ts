import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HealthJournalComponent } from './health-journal/health-journal.component';


const routes: Routes = [{ path: 'dashboard', component: DashboardComponent }, { path: 'dashboard/newassessment', component: NewAssessmentComponent }, { path: 'dashboard/healthjournal', component: HealthJournalComponent }];

@NgModule({
  declarations: [
    DashboardComponent,
    NewAssessmentComponent,
    HealthJournalComponent
  ],
  imports: [
    CommonModule, ChartsModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserviewModule { }
