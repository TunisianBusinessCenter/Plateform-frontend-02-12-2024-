import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriauxService {

  constructor(private http: HttpClient) { }

  getMateriauxEquipement() {
    return this.http.get('https://app.titv-store-api.com/search/materials/equipement')
  }
  getMateriauxAutomatisme() {
    return this.http.get('https://app.titv-store-api.com/search/materials/automatisme')
  }
  getMateriauxChauffage() {
    return this.http.get('https://app.titv-store-api.com/search/materials/chauffage')
  }
  getMateriauxEnergie() {
    return this.http.get('https://app.titv-store-api.com/search/materials/energie')
  }
  getMateriauxMeuble() {
    return this.http.get('https://app.titv-store-api.com/search/materials/meuble')
  }
  getMateriauxProtection() {
    return this.http.get('https://app.titv-store-api.com/search/materials/protection')
  }
  getMateriauxMenuiserie() {
    return this.http.get('https://app.titv-store-api.com/search/materials/menuiserie')
  }
  getMateriauxDecoration() {
    return this.http.get('https://app.titv-store-api.com/search/materials/decoration')
  }
}
