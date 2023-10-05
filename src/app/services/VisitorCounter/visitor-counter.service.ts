import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorCounterService {

  private visitorCountsKey = 'visitorCounts';


  constructor() { }

  public increaseVisitorCount(routeId: string) {
    let visitorCounts = this.getVisitorCounts();
    if (!visitorCounts[routeId]) {
      visitorCounts[routeId] = 100;
    }
    visitorCounts[routeId]++;
    localStorage.setItem(this.visitorCountsKey, JSON.stringify(visitorCounts));
  }

  public getVisitorCount(routeId: string) {
    let visitorCounts = this.getVisitorCounts();
    return visitorCounts[routeId] || 0;
  }

  private getVisitorCounts() {
    return JSON.parse(localStorage.getItem(this.visitorCountsKey)) || {};
  }
}
