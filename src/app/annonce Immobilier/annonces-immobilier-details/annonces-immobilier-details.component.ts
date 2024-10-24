import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { AgenciesService } from 'src/app/services/agencies/agencies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annonces-immobilier-details',
  templateUrl: './annonces-immobilier-details.component.html',
  styleUrls: ['./annonces-immobilier-details.component.css']
})
export class AnnoncesImmobilierDetailsComponent implements OnInit {
  announcements: any
  biens: any;
  imagesList: any;
  responsiveOptions: any[] = [
    {
      breakpoint: '1192px',
      numVisible: 4
    },
    {
      breakpoint: '1000px',
      numVisible: 3
    },
    {
      breakpoint: '700px',
      numVisible: 3
    },
    {
      breakpoint: '510px',
      numVisible: 3
    }
  ];
  annonceId: string;
  annonceData: any;
  imagePreview: any;
  constructor(private annonceService: AnnouncementService , private route:ActivatedRoute ) { 

  }

  ngOnInit(): void {

    this.annonceId = this.route.snapshot.paramMap.get('id');

    // Fetch the annonce data for editing
    this.annonceService.getAnnonce(this.annonceId).subscribe((data:any) => {
      this.annonceData = data;
      this.imagesList=this.annonceData.photos
      console.log('image :' ,this.imagePreview)
      console.log('annonceData :' ,this.annonceData.photos)
      console.log('Data :' ,this.annonceData)
    });
 
  }
  goBack() {
    window.history.back();
}

viewMoreDetails() {
    // Logic for viewing more details, e.g., navigating to another page or opening a modal
    console.log('View more details clicked');
}

}
