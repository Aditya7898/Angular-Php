import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { RequestComponent } from './request/request.component';
import { BasicDirective } from './Direcitve/basic-directive';
import { BetterDirective } from './Direcitve/better-directive';
import { HostListnerDirective } from './Direcitve/hostlistner-directive';
import { HostBindingDirective } from './Direcitve/hostbinding-directive';
import { CustomPropertyBindingDirective } from './Direcitve/customPropertyBindingDirective';
import { UppercaseDirective } from './Direcitve/uppercase.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    AllRequestsComponent,
    RequestComponent,

    // directives
    BasicDirective,
    BetterDirective,
    HostListnerDirective,
    HostBindingDirective,
    CustomPropertyBindingDirective,
    UppercaseDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: 'home', component: HomeComponent},
     { path: 'signup', component: SignupComponent},
     { path: 'allrequests', component: AllRequestsComponent},
     { path: 'request', component: RequestComponent},
     { path: 'login', component: LoginComponent}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
