import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Announcement } from './announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {


  constructor(private http: HttpClient) { }

  getAnnouncements() {
    // Simulating an API call
    return this.http.get('https://annoncebackenderro.vercel.app/Annances/all-annonce')
    // https://annoncebackenderr.vercel.app/Annances/6710dcc3e28d00ab0d1f8df9

  }
  getAnnonce(id: string) {
    return this.http.get('https://annoncebackenderro.vercel.app/Annances/' + id);
  }
}
