import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VisitorCounterService } from '../VisitorCounter/visitor-counter.service';

@Injectable({
  providedIn: 'root'
})
export class GardVisitorService implements CanActivate{

  constructor(private visitorCounterService: VisitorCounterService) {}

    canActivate(
      route: ActivatedRouteSnapshot & { params: { id: string } },
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.visitorCounterService.increaseVisitorCount(route.params.id);
      return true;
    }
}