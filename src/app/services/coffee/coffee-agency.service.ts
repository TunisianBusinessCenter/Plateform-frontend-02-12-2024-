import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeAgencyService {

  private storageKey = 'idAgency'
  constructor() { }
  setIdAgency(id:string): void {
    localStorage.setItem(this.storageKey,id)
  }
  getIdAgency():string {
    return localStorage.getItem(this.storageKey)
  }
}
