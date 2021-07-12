import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = [];
  //angular will create an object of ProductService class
  //and will pass as constructor parameter
  //service class implements a singleton pattern
  //angular injects an objects of ProductService class
  //DI: dependency injection
  constructor(private service: ProductService ) { 
    /* //instantiate service 
    const service = new ProductService()
    //get the list of products*/
    const result = service.getProducts()
    result.subscribe(response =>{
      console.log(response)
      if(response['status'] == 'success'){
        this.products = response['data']
      }else{
        alert('error while loding the data')
      }
    })
  }

  ngOnInit(): void {
  }

}
