import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ProjetsService } from '../services/projets/projets.service';

@Component({
  selector: 'app-villa-exemple',
  templateUrl: './villa-exemple.component.html',
  styleUrls: ['./villa-exemple.component.css']
})
export class VillaExempleComponent implements OnInit {

  public Agency:any
  public idAgency:any
  public idPiece: any
  public idProjet: any
  public category: any
  public Piece: any
  public PieceCategory: any
  public Projet: any
  public agenciesProjet: any
  public PieceProjet: any
  constructor(private activatedRoute: ActivatedRoute,
    private projetService: ProjetsService,
    private _location: Location) { }

  ngOnInit(): void {
    // this.idPiece = this.activatedRoute.snapshot.paramMap.get('id')

    // this.projetService.getPieceById(this.idPiece).subscribe(data => {
    //   this.Piece = data;
    //   console.log(data)
    // });
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getProjetById(this.idProjet).subscribe(data => {

      this.Projet = data;
      console.log(data)
    })  
    this.projetService.getListProjet().subscribe((data) => {
      this.agenciesProjet = data;
    });
    this.projetService.getListePiece().subscribe((data) => {
      this.PieceProjet = data;
    });

  //   this.projetService.getPieceByCategory(this.category).subscribe(data => {
  //     console.log(data)
  //     this.PieceCategory = data
  //   });
  //   this.idAgency= this.activatedRoute.snapshot.paramMap.get('id')
    
  //   this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
  //     console.log(data)
  //     this.Agency = data;

  // })
  }
  backClicked() {
    this._location.back();
  }
}
