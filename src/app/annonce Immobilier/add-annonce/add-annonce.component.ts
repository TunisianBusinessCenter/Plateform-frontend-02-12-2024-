import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  annonceData = {
    Annonce: '',        // Annonce title
    AnnonceName: '',    // Name of the annonce
    Annoncephoto: '',   // Image uploaded for annonce
    Vu: false,          // Flag for viewed status (not used in this form)
    adresse: '',        // Address field
    appartement: '',    // Apartment information
    description: '',    // Description of the annonce
    emailuser: '',      // Email of the user submitting the annonce
    isApproved: 'false',// Is annonce approved (dropdown)
    nom: '',            // Name of the contact person
    numero: [''],       // Contact number(s)
    photos: [],         // Array of additional photos multiplre files
    prix: '',           // Price of the annonce
    surface: '',        // Surface area of the property
    viewCount: 0,       // View count (disabled)
    ville: '',          // City of the annonce
  };

  selectedFiles: File[] = []; // Array to hold selected files
  selectedFile: File | null = null; // For storing selected single file

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {}

  onFilesSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files); // Convert FileList to an array
    this.uploadFiles()
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0]; // Get the first file selected
    if (file) {
      this.selectedFile = file;
    }
    this.uploadSingleFile()
  }
  async uploadSingleFile(): Promise<void> {
    if (this.selectedFile) {
      try {
        const uploadedUrl = await this.annonceService.uploadPhoto(this.selectedFile); // Upload the file
        console.log('File uploaded successfully:', uploadedUrl);
        alert('Upload Successful: ' + uploadedUrl);

        this.annonceData.Annoncephoto = uploadedUrl; // Save the uploaded URL to Annoncephoto

      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Upload Failed');
      }
    } else {
      alert('Please select a file first!');
    }
  }
  async uploadFiles(): Promise<void> {
    if (this.selectedFiles.length > 0) {
      try {
        const uploadedUrls = await Promise.all(
          this.selectedFiles.map(file => this.annonceService.uploadPhoto(file)) // Upload all selected files
        );
        console.log('Files uploaded successfully:', uploadedUrls);
        alert('Upload Successful: ' + uploadedUrls.join(', '));
        this.annonceData.photos = uploadedUrls; // Save the URLs of uploaded photos to the data
      } catch (error) {
        console.error('Error uploading files:', error);
        alert('Upload Failed');
      }
    } else {
      alert('Please select files first!');
    }
  }

  createAnnonce(): void {
    // Check for required fields
    let missingFields = [];
    if (!this.annonceData.Annonce) missingFields.push('Annonce');
    if (!this.annonceData.AnnonceName) missingFields.push('Annonce Name');
    if (this.annonceData.photos.length === 0) missingFields.push('Annonce Photos');
    if (!this.annonceData.adresse) missingFields.push('Adresse');
    if (!this.annonceData.appartement) missingFields.push('Appartement');
    if (!this.annonceData.description) missingFields.push('Description');
    if (!this.annonceData.emailuser) missingFields.push('Email User');
    if (!this.annonceData.nom) missingFields.push('Nom');
    if (!this.annonceData.prix) missingFields.push('Prix');
    if (!this.annonceData.surface) missingFields.push('Surface');
    if (!this.annonceData.ville) missingFields.push('Ville');
    
    // If there are missing fields, log an error and display an alert
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: `Please fill all required fields: ${missingFields.join(', ')}`,
      });
      return; // Stop the form submission if required fields are missing
    }

    console.log('Annonce Data:', this.annonceData);

    // Send the annonce data to the backend service
    this.annonceService.createAnnonce(this.annonceData).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Annonce Added Successfully',
          text: 'Your annonce has been added.',
        });
      },
      (error) => {
        console.error('Error while adding annonce:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `There was an error adding the annonce. Details: ${error.message || error}`,
        });
      }
    );
  }
}
