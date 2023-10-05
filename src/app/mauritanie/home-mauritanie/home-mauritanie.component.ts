import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-mauritanie',
  templateUrl: './home-mauritanie.component.html',
  styleUrls: ['./home-mauritanie.component.css']
})
export class HomeMauritanieComponent implements OnInit {

 images:any
 responsiveOptions
  constructor() { 
    this.responsiveOptions = [
      {
        breakpoint: '1724px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '650px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.images = [
      {edition: '204', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/0L1ExEDM-204.jpg'},
      {edition: '205', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/kExq7EDM-205.jpg'},
      {edition: '206 ', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/Z4OG2EDM-206.jpg'},
      {edition: '207 ', image: 'https://tunisie-immob.s3.eu-west-3.amazonaws.com/Po7trEDM-207.jpg'}
    ];
  }

}
