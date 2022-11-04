import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HelpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoginComponent, RegisterComponent, HelpComponent],
})
export class AuthenticationModule { }
