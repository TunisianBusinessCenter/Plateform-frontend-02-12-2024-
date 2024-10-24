import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
private sharedVariableSource = new BehaviorSubject <any> (null) ;
  constructor() { }
  setSharedVariable1(data: any) {
    this.sharedVariableSource.asObservable
  }
}
