import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AppComponent } from '../app/app.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];