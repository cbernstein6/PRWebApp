import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() loginReq = new EventEmitter<boolean>();
  login: boolean = false;
  showLogin(){
    this.login = true;
    this.loginReq.emit(this.login);
  }
  onSubmit(){}
}
