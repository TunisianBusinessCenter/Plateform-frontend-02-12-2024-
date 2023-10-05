import { Component, OnInit } from '@angular/core';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-meilleurs-bien-sfax',
  templateUrl: './meilleurs-bien-sfax.component.html',
  styleUrls: ['./meilleurs-bien-sfax.component.css']
})
export class MeilleursBienSfaxComponent implements OnInit {

  constructor(private meilleursBiensService: MeilleursBiensService) { }

  ngOnInit(): void {
  }

}
