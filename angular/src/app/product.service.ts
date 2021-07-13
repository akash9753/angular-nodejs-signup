import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    url = 'http://localhost:4000/product'
  constructor(private http : HttpClient) { }

  getProducts(){
    //create the http request
    const result = this.http.get('http://localhost:4000/product/list')
    //send the request and get the response
    //result.subscribe(response =>{
     console.log(result)
     //send the observable
     return result
   // })
  }
  saveProduct(title: string,description:string,price:string,category:string){
      const body = {
        title,
        description,
        price,
        category
      }
      return this.http.post(this.url + '/',body)
  }
}
