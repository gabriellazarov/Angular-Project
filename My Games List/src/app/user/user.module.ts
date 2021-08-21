import { AppRoutingModule } from './../app-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePageComponent } from './profile-page/profile-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ]
})
export class UserModule { }
