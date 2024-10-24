import { Component, Input, OnInit } from '@angular/core';
import { AgenciesService } from '../services/agencies/agencies.service';
interface Duree {
  name: string;
  code: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
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
export class FooterComponent implements OnInit {


  displayMaximizable1: boolean;
  displayMaximizable2: boolean;
  displayMaximizable3: boolean;
  displayMaximizable4: boolean;
  displayMaximizable5: boolean;


  durees: Duree[];
  contactText = "";
  numText = "";
  sharedVariable: any;
  constructor(private as:AgenciesService) { }

  ngOnInit(): void {
    this.click()
  
  }
  click(){
    this.as.sharedVariable$.subscribe((data) => {
      this.sharedVariable = data;
      // console.log('got me', this.sharedVariable);
    });
  
  }
  showMaximizableDialog1() {
    this.displayMaximizable1 = true;
  }
  showMaximizableDialog2() {
    this.displayMaximizable2 = true;
  }
  showMaximizableDialog3() {
    this.displayMaximizable3 = true;
  }
  showMaximizableDialog4() {
    this.displayMaximizable4 = true;
  }
  showMaximizableDialog5() {
    this.displayMaximizable5 = true;
  }
  
}
