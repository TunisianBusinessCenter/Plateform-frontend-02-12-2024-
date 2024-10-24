import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DetailsMateriauxComponent } from './details-materiaux/details-materiaux.component';
import { LoadingService } from './services/loading/loading.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private routerSubscription: Subscription;

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
    
    console.log(
      '%c 💻🔥 Douik Team Web 🔥💻', 
      'background: #f39d129a;; color: white; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);'
    );
      // Subscribe to the router events to detect navigation changes
      this.routerSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Reset the scroll position to the top of the page
          window.scrollTo(0, 0);
        }
      });
  }
  ngOnDestroy() {
    // Unsubscribe from the router events when the component is destroyed
    this.routerSubscription.unsubscribe();
  }

}
