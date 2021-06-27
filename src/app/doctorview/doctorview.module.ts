import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalviewComponent } from './journalview/journalview.component';
import { RouterModule, Routes } from '@angular/router';
// import { AiassistComponent } from './aiassist/aiassist.component';

const routes: Routes = [{ path: 'doctorview', component: JournalviewComponent }];


@NgModule({
  declarations: [
    JournalviewComponent,
    // AiassistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorviewModule { }
