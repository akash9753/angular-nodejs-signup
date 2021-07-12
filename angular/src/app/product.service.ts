import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getProducts(){
    //create the http request
    const result = this.httpClient.get('http://localhost:4000/product')
    //send the request and get the response
    //result.subscribe(response =>{
     console.log(result)
     //send the observable
     return result
   // })
  }
}
