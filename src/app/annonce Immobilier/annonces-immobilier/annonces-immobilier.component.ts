import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement.model'; // Assuming you have an Announcement model
import { AnnouncementService } from '../announcement.service'; // Assuming you have a service to fetch announcements

@Component({
  selector: 'app-annonces-immobilier',
  templateUrl: './annonces-immobilier.component.html',
  styleUrls: ['./annonces-immobilier.component.css']
})
export class AnnoncesImmobilierComponent implements OnInit {
  announcements: Announcement[] = []; // Full list of announcements
  filteredAnnouncements: Announcement[] = []; // Filtered announcements for display
  selectedApartmentType: string = ''; // Bound to apartment type select
  selectedAnnonceType: string = ''; // Bound to annonce type select
  selectedLocation: string = ''; // Bound to location select

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.fetchAnnouncements(); // Fetch all announcements on initialization
  }

  // Fetch announcements from service
  fetchAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe((data: Announcement[]) => {
      this.announcements = data; // Save full announcement list
      this.filteredAnnouncements = data; // Initialize filtered list to full list
      console.log(this.announcements); // Debugging
    });
  }
 
  // Filter announcements based on selected criteria
  onSearch(): void {
    this.filteredAnnouncements = this.announcements.filter(annonce => {
      const matchesApartmentType = this.selectedApartmentType ? annonce.appartement === this.selectedApartmentType : true;
      const matchesAnnonceType = this.selectedAnnonceType ? annonce.Annonce === this.selectedAnnonceType : true;
      const matchesLocation = this.selectedLocation ? annonce.ville === this.selectedLocation : true;

      return matchesApartmentType && matchesAnnonceType && matchesLocation;
    });

    console.log('Filtered Announcements:', this.filteredAnnouncements);

    if (this.filteredAnnouncements.length === 0) {
      console.log("No results found"); // For debugging empty results
    }
  }
}
