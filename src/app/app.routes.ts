import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: '', redirectTo: "login", pathMatch: "full"},
    {path: 'main', component: MainComponent},
    {path: 'login', component: LoginComponent}
];