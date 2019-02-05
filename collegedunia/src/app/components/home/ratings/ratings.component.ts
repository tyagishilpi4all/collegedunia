import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  name:string;
  constructor() { 
    this.name="Ratings";
  }

  ngOnInit() {
  }

}
