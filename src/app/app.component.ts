import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DetailsMateriauxComponent } from './details-materiaux/details-materiaux.component';
import { LoadingService } from './services/loading/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'boutique2';
  displayLodingIndicator = false;
  loading$ = this.loader.loading$;
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public loader: LoadingService,
  ) { }
  isLoading = true; // Initial loading state

  ngOnInit() {
    
    this.router.events.subscribe((RouterEvent: Event) => {
      if (RouterEvent instanceof NavigationStart) {
        this.displayLodingIndicator = true
      }
      if (RouterEvent instanceof NavigationEnd) {
        this.displayLodingIndicator = true
      }
    })
  }


}
