import { Component } from '@angular/core';
import { HttpRequest } from '../http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-schools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-schools.component.html',
  styleUrl: './top-schools.component.css'
})
export class TopSchoolsComponent {
  schools: any;
  college: any;

  constructor(private http : HttpRequest){}

  ngOnInit(){
    this.http.PopularSchools().subscribe(schools => {
      this.schools = Object.values(schools);
    })

    this.http.GetCollege().subscribe(college => {
      this.college = college;
    });
  }

  buttonClick(){
    console.log(this.college);
  }

  

}
