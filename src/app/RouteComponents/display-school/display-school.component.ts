import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-school',
  standalone: true,
  imports: [],
  templateUrl: './display-school.component.html',
  styleUrl: './display-school.component.css'
})
export class DisplaySchoolComponent {
  @Input() schoolDisplay: any;

  title: any | null;
  location: any | null;
  imagePath: any | null;
  id: any | null;


  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.title = params.get('title');
      this.location = params.get('location'); 
      this.imagePath = params.get('imagePath'); 
    });

  }
}
