import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './authentication-module/authentication.module'
import { AppComponent } from './app.component';
import { ContentComponent } from './content-component/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routing} from "./app.routing";
import { SharedComponent } from './shared-component/shared.component';
import { HeaderComponent } from './shared-component/header-component/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SharedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,AuthenticationModule, BrowserAnimationsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
