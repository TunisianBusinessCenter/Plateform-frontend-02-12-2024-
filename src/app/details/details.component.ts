import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgenciesService } from '../services/agencies/agencies.service';
import { ProjetsService } from '../services/projets/projets.service';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/api';
import { VisitorCounterService } from '../services/VisitorCounter/visitor-counter.service';
import * as moment from 'moment';

interface Duree {
  name: string;
  code: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }
      p {
          margin: 0;
      }
      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `]
})
export class DetailsComponent implements OnInit {

  public idProjet: any
  public Projet: any
  images!: any[]
  agenciesProjet: any
  public idPiece: any
  public Piece: any
  public idAgency: any
  public Agency: any
  displayMaximizable: boolean;
  contactText = "";
  numText = "";

  responsiveOptions: any[] = [
    {
      breakpoint: '1192px',
      numVisible: 4
    },
    {
      breakpoint: '1000px',
      numVisible: 3
    },
    {
      breakpoint: '700px',
      numVisible: 3
    },
    {
      breakpoint: '510px',
      numVisible: 3
    }
  ];
  durees: Duree[];
  items: SelectItem[];
  item: string;
  visitorCount: number;
  routeId: string;
  constructor(private activatedRoute: ActivatedRoute,
    private agencieService: AgenciesService,
    private projetService: ProjetsService,
    private _location: Location,
    private router: Router,
    private visitorCounterService: VisitorCounterService) {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
    this.durees = [
      { name: '84 Moin', code: '84 Moin' },
      { name: '120 Moin', code: '120 Moin' },
      { name: '180 Moin', code: '180 Moin' },
      { name: '240 Moin', code: '240 Moin' },
    ];
  }

  ngOnInit(): void {


    this.idAgency = this.activatedRoute.snapshot.paramMap.get('id')

    this.agencieService.getAgencieById(this.idAgency).subscribe(data => {
      this.Agency = data;
      console.log("agencyId", this.Agency)
    }),

      this.agencieService.getAllAgencies().subscribe((data: any) => {

        this.images = data;
        console.log("allAgency", this.images)
      })


    //   this.agencieService.getAgencieTunis().subscribe((images: any) => {

    //     this.images = images;
    // })
    this.idProjet = this.activatedRoute.snapshot.paramMap.get('id')

    this.projetService.getProjetById(this.idProjet).subscribe(data => {
      console.log(data)
      this.Projet = data;
    })
    this.projetService.getListProjet().subscribe((data) => {
      this.agenciesProjet = data;
    });

    this.idPiece = this.activatedRoute.snapshot.paramMap.get('category')

    this.projetService.getPieceById(this.idPiece).subscribe(data => {
      console.log(data)
      this.Piece = data;

    });
    ///methode1:
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo({ top: 200, behavior: 'auto' });

    });
    //methode2:
    // const element = document.getElementById("box");
    // element.scrollIntoView({ block: "start", behavior: "auto" });

    this.routeId = this.activatedRoute.snapshot.params['id'];

    this.visitorCount = this.visitorCounterService.getVisitorCount(this.routeId);
  }

  backClicked() {
    this._location.back();
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }


  // getDateDifference() {
  //   let now = moment();
  //   let publication = moment(this.Projet?.createdAt, "DD/MM/YYYY HH:mm:ss");
  //   let diffInMonths = now.diff(publication, 'months');
  //   return `il y a ${diffInMonths} mois`;  
  // }
  getDateDifference() {
    let now = moment();
    let publication = moment(this.Projet?.createdAt, "DD/MM/YYYY HH:mm:ss");
    let diff = now.diff(publication);
    let duration = moment.duration(diff);
    if (duration.asHours() < 24) {
      return `il y a ${duration.hours()} heures`;
    } else if (duration.asDays() < 30) {
      return `il y a ${duration.days()} jours`;
    } else if (duration.asMonths() < 12) {
      return `il y a ${duration.months()} mois`;
    } else {
      return `il y a ${duration.years()} ans`;
    }
  }


}
