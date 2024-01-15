import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  displayMaximizable:boolean
  constructor(public router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
}
slideActivate(ngbSlideEvent: NgbSlideEvent) {
  console.log(ngbSlideEvent.source);
  console.log(ngbSlideEvent.paused);
  console.log(NgbSlideEventSource.INDICATOR);
  console.log(NgbSlideEventSource.ARROW_LEFT);
  console.log(NgbSlideEventSource.ARROW_RIGHT);
}
showNavigation(): boolean {
  // Get the current full route path
  const currentPath = this.route.snapshot['_routerState'].url;

  // Check if the current path starts with the specified routes
  return currentPath.startsWith('/details/') || currentPath.startsWith('/agency/' ) || currentPath.startsWith('/villa-details/' );
}



}

