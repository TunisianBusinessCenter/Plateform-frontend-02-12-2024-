import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  base_path="https://app.titv-store-api.com/"

  constructor(private http:HttpClient) { }
  private refreshData = new Subject<void>();
  getRefreshData() {
    return this.refreshData;
  }

  httpOptions = {
    headers: new HttpHeaders({  
      'Content-Type': 'application/json',
    })
  }
  DemandeIncr(item) : Observable<any>{
    return <Observable<any>>this.http
    .post<any>(this.base_path + 'registre/add', JSON.stringify(item), this.httpOptions)
    .pipe(
      tap(() => {
        this.refreshData.next();
      })
    );
  }

  updateDemandeIncr(item) : Observable<any>{
    return <Observable<any>>this.http
    .put<any>(this.base_path + 'registre/update', JSON.stringify(item), this.httpOptions)
    .pipe(
      tap(() => {
        this.refreshData.next();
      })
    );
  }

  deleteDemandeIncr(id) : Observable<any>{
    return <Observable<any>>this.http
    .delete<any>(this.base_path + 'registre/delete/'+id, this.httpOptions)
    .pipe(
      tap(() => {
        this.refreshData.next();
      })
    );
  }
}
