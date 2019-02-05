import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css']
})
export class StylesComponent implements OnInit {
  name:string;
  imgUrl:string;
  constructor() { 
    this.name="Styles";
    this.imgUrl="../../../../assets/images/red.jpg";
  }

  ngOnInit() {
  }

}
