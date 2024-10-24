import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoteurImmobiliersService {
  private storageKey = 'idAgency'
  private storageKey1 = 'materiaux'
  private storageKey2 = 'changeCoffee'
  private storageKey3 = 'idAgencyMeilleursBiens'
  private storageKey4 = 'PromoteurImmobiliers'
  constructor() { }
  setIdAgency(id:any): void {
    localStorage.setItem(this.storageKey4,id)
  }
  getIdAgency():string {
    return localStorage.getItem(this.storageKey4)
  }
}
