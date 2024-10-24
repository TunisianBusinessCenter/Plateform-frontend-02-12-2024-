import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgenceImmobService {
  private storageKey = 'idAgenceImmob'

  constructor() { }
  setIdAgency(id:any): void {
    localStorage.setItem(this.storageKey,id)
  }
  getIdAgency():string {
    return localStorage.getItem(this.storageKey)
  }
}
