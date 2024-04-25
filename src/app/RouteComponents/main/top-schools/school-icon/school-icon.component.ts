import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-school-icon',
  standalone: true,
  imports: [],
  templateUrl: './school-icon.component.html',
  styleUrl: './school-icon.component.css'
})
export class SchoolIconComponent {
  @Input() school: any;
  
  
}
