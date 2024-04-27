import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './RouteComponents/main/search/search.component';
import { TopSchoolsComponent } from './RouteComponents/main/top-schools/top-schools.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './RouteComponents/login/login.component';
import { CommonModule } from '@angular/common';
import { HttpRequest } from './http.service'
import { DisplaySchoolComponent } from "./RouteComponents/display-school/display-school.component";
import { FormsModule } from '@angular/forms';
import { MainComponent } from "./RouteComponents/main/main.component";
import { Routes, RouterModule, RouterOutlet } from '@angular/router';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [HttpRequest],
    imports: [HeaderComponent, RouterOutlet, HttpClientModule, RouterModule]
})


export class AppComponent {
  title = 'RatePlate-web-app';
  userId: number = -1;
  
  users: any;

  
  constructor(private http: HttpRequest) {}

  
  routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'main', component: MainComponent},
    {path: 'login', component: LoginComponent},
  ];

  ngOnInit(){}
}
