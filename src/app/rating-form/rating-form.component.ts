import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.css'
})
export class RatingFormComponent {

  reviewForm!: FormGroup;
  categories = ['taste', 'atmosphere', 'location', 'service', 'cleanliness', 'menu', 'price'];

  constructor(private fb: FormBuilder){
    this.reviewForm = this.fb.group({
      taste: '',
      atmosphere: '',
      location: '',
      service: '',
      cleanliness: '',
      menu: '',
      price: '',
      feedback: ''
    });
  }

  onSubmit() {
    console.log(this.reviewForm.value);
    // Add any additional logic here for form submission
  }
}
