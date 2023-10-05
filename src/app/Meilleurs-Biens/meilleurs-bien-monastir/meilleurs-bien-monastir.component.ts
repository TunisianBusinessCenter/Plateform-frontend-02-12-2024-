import { Component, OnInit } from '@angular/core';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-meilleurs-bien-monastir',
  templateUrl: './meilleurs-bien-monastir.component.html',
  styleUrls: ['./meilleurs-bien-monastir.component.css']
})
export class MeilleursBienMonastirComponent implements OnInit {

  constructor(private meilleursBiensService: MeilleursBiensService) { }

  ngOnInit(): void {
  }

}
