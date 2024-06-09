import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentServiceService {


  private apiUrl='https://api.invcom.com/investments';

  constructor(private http:HttpClient) { }

  getInvestments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getInvestmentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
