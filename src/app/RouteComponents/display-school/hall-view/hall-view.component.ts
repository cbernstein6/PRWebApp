import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hall-view',
  standalone: true,
  imports: [],
  templateUrl: './hall-view.component.html',
  styleUrl: './hall-view.component.css'
})
export class HallViewComponent {
  @Input() hall: any;

  ngOnInit(){
    console.log(this.hall);
  }
}
