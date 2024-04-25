import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-school',
  standalone: true,
  imports: [],
  templateUrl: './display-school.component.html',
  styleUrl: './display-school.component.css'
})
export class DisplaySchoolComponent {
  @Input() schoolDisplay: any;

  ngOnInit(){
    
  }
}
