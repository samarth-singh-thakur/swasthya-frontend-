import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupModule } from './signup/signup.module';
import { UserviewModule } from './userview/userview.module';
import { LoginModule } from './login/login.module';
import { DoctorviewModule } from './doctorview/doctorview.module';
import { AiassistComponent } from './docctorview/aiassist/aiassist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AiassistComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    SignupModule,
    LoginModule,
    UserviewModule,
    DoctorviewModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
