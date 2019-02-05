import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-rating',
  templateUrl: './all-rating.component.html',
  styleUrls: ['./all-rating.component.css']
})
export class AllRatingComponent implements OnInit {
   name:string;
   rating:number;
   url:string;
   carName:string;
  constructor() { 
    this.name="View All Ratings";
    this.rating=8.3;
    this.url="../../../../assets/images/red.jpg";
    this.carName="Swift";
  }

  ngOnInit() {
  }

}
