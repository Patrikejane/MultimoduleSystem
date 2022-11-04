import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import {routing} from "./authentication.routing";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HelpComponent
  ],
  imports: [
    CommonModule, routing, MatCardModule, FormsModule, MatInputModule
  ],
  exports: [LoginComponent, RegisterComponent, HelpComponent],
})
export class AuthenticationModule { }
