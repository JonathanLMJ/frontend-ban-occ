import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiAwsService {

  constructor(private http: HttpClient ) {}

  getUserInfo() {
    let params = new HttpParams().set('nit', '800220154');
    const getUrl = 'https://6qq9fanqib.execute-api.us-east-2.amazonaws.com/dev';
    return this.http.get<any[]>(getUrl, { params });
  }
  
}