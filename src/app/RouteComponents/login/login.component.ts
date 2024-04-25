import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class LoginComponent {
    onSubmit(){
    
    }
}
