import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  base_path = 'https://app.titv-store-api.com/';
  constructor(private http :HttpClient) { }

  getListProjet(){

    return this.http.get(this.base_path + 'projets/all')
  }
  getProjetById(idProjet:number){
    return this.http.get('https://app.titv-store-api.com/projets/'+idProjet)
  }
  getPieceById(idPiece:number){
    return this.http.get(this.base_path +'projets/piece/'+idPiece)
  }
  getListePiece(){
    return this.http.get(this.base_path + 'projets/piece/all')
  }
  getPieceByCategory(category:string){
    return this.http.get(this.base_path + 'projets/piece/category/'+category)
  }
}
