import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TopSchoolsComponent } from './top-schools/top-schools.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HttpRequest } from './http.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, TopSchoolsComponent, HttpClientModule, LoginComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpRequest]
})


export class AppComponent {
  title = 'RatePlate-web-app';
  userId: number = -1;
  login: boolean = false;
  users: any;
  

  constructor(private http: HttpRequest) {}

  setLogin(val: boolean){
    
    this.login = true;
  }

  ngOnInit(){
    this.http.getUsers().subscribe(users => {
      this.users = users;
    })
    
    
  }



  
}
