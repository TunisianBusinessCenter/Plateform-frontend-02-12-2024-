import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  constructor(private http: HttpClient) { }

  getMagazine() {
    return this.http.get('https://app.titv-store-api.com/magazines/all')
  }
}
