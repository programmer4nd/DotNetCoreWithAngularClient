
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private url =      'https://localhost:7235/api/Employees'; 
  constructor(private httpClient: HttpClient) { }

  initilizeHeader() {
    const headers = new HttpHeaders({
      'Content-Type': `application/json`,
      'Accept': `*/*`,
      'Access-Control-Allow-Origin': `*`
    });
    return headers;
  };
  getEmployees() { 
   //  fetch data from api
    let header = { headers: this.initilizeHeader() };
    return this.httpClient.get<any[]>(this.url, header); 
  }
}





