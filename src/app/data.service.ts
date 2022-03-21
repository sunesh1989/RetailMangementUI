import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<any>{
    //As of now top 100 records will display but its configurable
    return this.httpClient.get("https://localhost:44330/api/product/100/0")
  }
  getProductDetails(id:string):Observable<any>{
    return this.httpClient.get("https://localhost:44330/api/product/"+id)
  }
}
