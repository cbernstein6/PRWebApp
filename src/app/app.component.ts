import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TopSchoolsComponent } from './top-schools/top-schools.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataInterface } from '../../interfaces/DataInterface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, SearchComponent, TopSchoolsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RatePlate-web-app';
  userId: number = -1;

  constructor(private http: HttpClient) {
    this.http.get<DataInterface>('http://localhost:5119/api/rp/GetFirst').subscribe(data => {
      this.userId = data.userId;
    })
  }

  
}
