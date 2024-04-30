import { Component, EventEmitter, Output } from '@angular/core';
import { HttpRequest } from '../http.service';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

  @Output() loginReq = new EventEmitter<boolean>();
  login: boolean = false;
  users: any;
  // signUpForm: FormGroup;
  
  constructor(private http: HttpRequest) {}

  ngOnInit(){
    
    // this.http.GetUserList().subscribe(users => {
    //   this.users = users;
    // })

    // console.log(this.users);
    
  }


  showLogin(){
    this.login = true;
    this.loginReq.emit(this.login);
  }
  
}
