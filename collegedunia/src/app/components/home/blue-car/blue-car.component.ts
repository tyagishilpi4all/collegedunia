import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-car',
  templateUrl: './blue-car.component.html',
  styleUrls: ['./blue-car.component.css']
})
export class BlueCarComponent implements OnInit {
   name:string;
   imgUrl:string;
  constructor() {
    this.name="Styles";
    this.imgUrl="../../../../assets/images/blue.jpg";
   }

  ngOnInit() {
  }

}
