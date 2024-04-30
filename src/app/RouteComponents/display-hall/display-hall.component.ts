import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpRequest } from '../../http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-hall',
  standalone: true,
  imports: [CommonModule],
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

  ratings: any;

  detailList: any;
  
  constructor(private route: ActivatedRoute, private http: HttpRequest){}

  ngOnInit() {
    this.querySubscription = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.title = params['name'];
      this.imagePath = params['imagePath'];
      this.location = params['location'];
      this.averageScore = params['averageScore'];
    });


    this.http.GetHallRatings(this.id).subscribe((res) => {
      this.ratings = Object.values(res);
    });
    
    this.http.GetRatingDetails(this.id).subscribe((res) => {
      this.detailList = res;
      // console.log(this.detailList[0]);
    });
  }
  
  ngOnDestroy(){
    this.querySubscription.unsubscribe();
  }
}