

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private s3: S3Client;

  base_path = 'https://annoncebackenderr.vercel.app/Annances/';
  base_path_edit = 'https://annoncebackenderr.vercel.app/Annances/edit';
  
  constructor(private http :HttpClient) {
    this.s3 = new S3Client({
      region: 'eu-west-3',
      credentials: {
        accessKeyId: 'AKIAXVWFAUBHMPN52ZWC',
        secretAccessKey: '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',
      },
    });
  }

  // API call to create an announcement
  createAnnonce(annonceData: any) {
    return this.http.post(this.base_path + 'ajouter', annonceData);
  }

  getAnnouncements() {
    return this.http.get(this.base_path + 'all-annonce');
  }
  getAnnouncementsAttente() {
    return this.http.get(this.base_path + 'VuInapproved/all');
  }
  
  getAnnouncementNonVu() {
    return this.http.get(this.base_path + 'AnnoncesNonVu/all');
  }
  // private announcementsSubject = new BehaviorSubject<any[]>([]);
  // public announcements$ = this.announcementsSubject.asObservable();
  
  // getAnnouncementNonVu() {
  //   this.http.get(this.base_path + 'AnnoncesNonVu/all').subscribe(
  //     (data) => this.announcementsSubject.next(data:any)
  //   );
  // }
  
  deleteItem(id: string) {
    return this.http.delete(this.base_path + 'delete/' + id);
  }

  getAnnonceDetails(id: string) {
    return this.http.get(this.base_path + 'moveNonVu/' + id);
  }
  getAnnonce(id: string) {
    return this.http.get(this.base_path + id);
  }

  updateAnnonce(id: string, data: any) {
    return this.http.put(this.base_path_edit + id, data);
  }

  approveAnnouncement(id: any): Observable<any> {
    const url = `${this.base_path}approver/${id}`;
    return this.http.put(url, {}); // Assuming no payload is required; adjust if needed
  }
 
  
  async uploadPhoto(file: File): Promise<string> {
    const bucketName = 'tunisie-immob'; // Your S3 bucket name
    const region = 'eu-west-3'; // Specify the correct region
    const key = `annonces/${Date.now()}_${file.name}`; // Unique file path in S3
  
    const uploadParams = {
      Bucket: bucketName,
      Key: key,
      Body: file,
      ContentType: file.type, // Optional: Set content type
    };
  
    try {
      // Upload the file to S3
      await this.s3.send(new PutObjectCommand(uploadParams)); 
  
      // Construct the URL based on the region and bucket
      const uploadedUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
      return uploadedUrl;
    } catch (error) {
      console.error('File upload failed:', error);
      throw error;
    }
  }
  

}

