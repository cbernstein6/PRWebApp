import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './main/search/search.component';
import { TopSchoolsComponent } from './top-schools/top-schools.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HttpRequest } from './http.service'
import { DisplaySchoolComponent } from "./main/display-school/display-school.component";
import { FormsModule } from '@angular/forms';
import { MainComponent } from "./main/main.component";
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path="/", component="AppComponent"}
];

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [HttpRequest],
    imports: [HeaderComponent, SearchComponent, TopSchoolsComponent, HttpClientModule, LoginComponent, CommonModule, DisplaySchoolComponent, FormsModule, MainComponent]
})


export class AppComponent {
  title = 'RatePlate-web-app';
  userId: number = -1;
  
  users: any;

  

  constructor(private http: HttpRequest) {}



  ngOnInit(){
    this.http.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
