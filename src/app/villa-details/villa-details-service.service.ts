import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillaDetailsServiceService {

  private apiurl = "http://localhost:9000/api/mail/send"
  constructor(private http : HttpClient ) { 
  }

  sendEmail (emailData:any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiurl , emailData, { headers });
  }
}
