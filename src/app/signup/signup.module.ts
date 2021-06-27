import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupWindowComponent } from './signup-window/signup-window.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
const routes: Routes = [{ path: 'signup', component: SignupWindowComponent }];
@NgModule({
  declarations: [
    SignupWindowComponent,
    UserComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
