import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<any>{

    return this.httpClient.get("https://localhost:44330/api/product")

  }
  getProductDetails(id:string):Observable<any>{

    return this.httpClient.get("https://localhost:44330/api/product/"+id)

  }
}
