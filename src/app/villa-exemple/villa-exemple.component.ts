import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjetsService } from '../services/projets/projets.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-villa-exemple',
  templateUrl: './villa-exemple.component.html',
  styleUrls: ['./villa-exemple.component.css']
})
export class VillaExempleComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {}
  @ViewChild('slider', { static: true }) slider: ElementRef;
  currentIndex: number = 0;
  isModalOpen: boolean = false;
  modalImage: string = '';
  cards = [
    { title: 'Card 1', image: 'assets/icons/bleu.png' },
    { title: 'Card 2', image: 'assets/icons/bleu.png' },
    { title: 'Card 3', image: 'assets/icons/bleu.png' },
    { title: 'Card 3', image: 'assets/icons/bleu.png' }
    
  ];
  piece: any = {
    photos: [
      'https://www.example.com/images/image1.jpg',
      'https://www.example.com/images/image2.jpg',
      'https://www.example.com/images/image3.jpg'
    ]
  };
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.slider.nativeElement.scrollTo({
        left: this.slider.nativeElement.offsetWidth * this.currentIndex,
        behavior: 'smooth'
      });
    }
  }
  openImageInDialog(item: string) {
    // Handle the logic for opening the image in a dialog or lightbox
    console.log('Opening image:', item);
  }
  scrollRight() {
    if (this.currentIndex < this.slider.nativeElement.children.length - 1) {
      this.currentIndex++;
      this.slider.nativeElement.scrollTo({
        left: this.slider.nativeElement.offsetWidth * this.currentIndex,
        behavior: 'smooth'
      });
    }
  }

  openModal(image: string) {
    this.modalImage = image;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  showAlert() {
    Swal.fire({
      title: 'Success!',
      text: "L'email a été envoyé avec succès.",
      icon: 'success',
      confirmButtonText: 'Fermer'
    });
  }
}

  