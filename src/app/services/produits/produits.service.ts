import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  base_path = 'https://app.titv-store-api.com/';
  constructor(private http :HttpClient) { }
  getListProduit(){

    return this.http.get(this.base_path + 'produits/all')
  }
  getProduitById(idProduit:number){
    return this.http.get('https://app.titv-store-api.com/produits/'+idProduit)
  }
  getSousCategorieByName(nameCategorie:string){
    return this.http.get('https://app.titv-store-api.com/produits/sous/category/'+nameCategorie)
  }
  getSousCategorieById(IdCategorie:number){
    return this.http.get('https://app.titv-store-api.com/produits/sous/'+IdCategorie)
  }

  
}
