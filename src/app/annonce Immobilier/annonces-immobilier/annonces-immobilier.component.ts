import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement.model'; // Assuming you have an Announcement model
import { AnnouncementService } from '../announcement.service'; // Assuming you have a service to fetch announcements
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-annonces-immobilier',
  templateUrl: './annonces-immobilier.component.html',
  styleUrls: ['./annonces-immobilier.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('900ms ease-out', style({ opacity: 1, transform: 'translateY(50)' }))
      ]),
      transition(':leave', [
        animate('900ms ease-in', style({ opacity: 0, transform: 'translateY(50px)' }))
      ])
    ])
  ]
})
export class AnnoncesImmobilierComponent implements OnInit {
  showCards = false;

  announcements: Announcement[] = []; // Full list of announcements
  filteredAnnouncements: Announcement[] = []; // Filtered announcements for display
  paginatedAnnouncements: Announcement[] = []; // Announcements for the current page
  currentPage = 1; // Current page number
  itemsPerPage = 3; // Number of items per page (can adjust this as needed)
  selectedApartmentType: string = ''; // Bound to apartment type select
  selectedAnnonceType: string = ''; // Bound to annonce type select
  selectedLocation: string = ''; // Bound to location select
  displayMaximizable1: boolean;
  paginatedAnnouncementsStatic = [
    { image: 'https://via.placeholder.com/300?text=Loading' },
    { image: 'https://via.placeholder.com/300?text=Loading' },
    { image: 'https://via.placeholder.com/300?text=Loading' }
  ];
  cities = [
    { name: 'Tunis' },
    { name: 'Ariana' },
    { name: 'Ben Arous' },
    { name: 'Manouba' },
    { name: 'Nabeul' },
    { name: 'Zaghouan' },
    { name: 'Bizerte' },
    { name: 'Béja' },
    { name: 'Jendouba' },
    { name: 'Kef' },
    { name: 'Siliana' },
    { name: 'Sousse' },
    { name: 'Monastir' },
    { name: 'Mahdia' },
    { name: 'Sfax' },
    { name: 'Kairouan' },
    { name: 'Kasserine' },
    { name: 'Sidi Bouzid' },
    { name: 'Gabès' },
    { name: 'Médenine' },
    { name: 'Tataouine' },
    { name: 'Gafsa' },
    { name: 'Tozeur' },
    { name: 'Kébili' },
  ];
  annonceTypes = [
    { name: 'Vente', value: 'Vente' },
    { name: 'Location', value: 'Location' },
    { name: 'Location Vacances', value: 'Location Vacances' }
  ];
  propertyTypes = [
    { name: 'Appartements', value: 'Appartements' },
    { name: 'Bureaux', value: 'Bureaux' },
    { name: 'Commerces', value: 'Commerces' },
    { name: 'Duplexes', value: 'Duplexes' },
    { name: 'Industriel', value: 'Industriel' },
    { name: 'Lots', value: 'Lots' },
    { name: 'Studios', value: 'Studios' },
    { name: 'Terrain agricole', value: 'Terrain agricole' },
    { name: 'Villas / maisons', value: 'Villas / maisons' }
  ];

  selectedPropertyType: string;
  selectedAnnonce: string;
  selectedCity: string;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.fetchAnnouncements(); // Fetch all announcements on initialization
  }

  // Fetch announcements from service
  fetchAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe((data: Announcement[]) => {
      this.announcements = data; // Save full announcement list
      this.filteredAnnouncements = data.reverse(); // Initialize filtered list to full list
      this.updatePaginatedAnnouncements(); // Set the first page

      console.log(this.announcements); // Debugging
    });
  }
  updatePaginatedAnnouncements(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedAnnouncements = this.filteredAnnouncements.slice(startIndex, endIndex);
  }

  // Filter announcements based on selected criteria
  onSearch(): void {
    this.filteredAnnouncements = this.announcements.filter(annonce => {
      const matchesApartmentType = this.selectedApartmentType ? annonce.appartement === this.selectedApartmentType : true;
      const matchesAnnonceType = this.selectedAnnonceType ? annonce.Annonce === this.selectedAnnonceType : true;
      const matchesLocation = this.selectedLocation ? annonce.ville === this.selectedLocation : true;

      return matchesApartmentType && matchesAnnonceType && matchesLocation;
    });

    this.currentPage = 1; // Reset to first page
    this.updatePaginatedAnnouncements(); // Update the paginated list based on the filter
  }

  // Change page
  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedAnnouncements();
  }
  showMaximizableDialog1() {
    this.displayMaximizable1 = true;
  }


  imageSrc: string | ArrayBuffer | null = null;
  imageGroup: string[] = []; // Array to hold URLs of uploaded group images
  
  onFileChange(event: Event, imageNumber: number) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      if (imageNumber === 1) {
        this.imageSrc = reader.result; // For the single image
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
}
  
  onFilesChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.imageGroup = []; // Clear previous images
      for (let i = 0; i < input.files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageGroup.push(reader.result as string); // Add each image to the array
        };
        reader.readAsDataURL(input.files[i]);
      }
    }
  }
   uploadImages() {
    // Logic to upload the group of images to the server or S3
    console.log(`Group of images uploaded:`, this.imageGroup);
  }
  
  uploadImage(imageNumber: number) {
    // Logic to upload the single image to the server or S3
    console.log(`Image ${imageNumber} uploaded.`);
  }
  
 
  toggleCards(): void {
    this.showCards = !this.showCards;
  }























  
}
