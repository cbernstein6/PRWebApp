import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-hall',
  standalone: true,
  imports: [],
  templateUrl: './display-hall.component.html',
  styleUrl: './display-hall.component.css'
})
export class DisplayHallComponent {
  private querySubscription!: Subscription;

  title: any | null;
  location: any | null;
  imagePath: any | null;
  id: any | null;
  averageScore: any | null;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.querySubscription = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.title = params['name'];
      this.imagePath = params['imagePath'];
      this.location = params['location'];
      this.averageScore = params['averageScore']
    });
  }

  ngOnDestroy(){
    this.querySubscription.unsubscribe();
  }
}
