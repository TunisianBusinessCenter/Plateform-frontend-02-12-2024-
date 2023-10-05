import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telechargement',
  templateUrl: './telechargement.component.html',
  styleUrls: ['./telechargement.component.css']
})
export class TelechargementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onImageClick() {
    const link = document.querySelector('img[data-link]').getAttribute('data-link');
    window.open(link, '_blank');
  }

}
