import { Component, OnInit } from '@angular/core';
import { MeilleursBiensService } from 'src/app/services/meilleurs-bien/meilleurs-biens.service';

@Component({
  selector: 'app-meilleurs-bien-nabeul',
  templateUrl: './meilleurs-bien-nabeul.component.html',
  styleUrls: ['./meilleurs-bien-nabeul.component.css']
})
export class MeilleursBienNabeulComponent implements OnInit {

  constructor(private meilleursBiensService: MeilleursBiensService) { }

  ngOnInit(): void {
  }

}
