import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string
  description: string
  price: string
  category:string

  constructor(
    private service : ProductService,
    private router : Router
    ) { }

  ngOnInit(): void {
    
  }
  onSave(){
         /* console.log(`title:  ${this.title}`)
        console.log(`Description:  ${this.description}`)
        console.log(`price:  ${this.price}`) 
        console.log(`gender:  ${this.category}`)  */
         this.service
         .saveProduct(this.title,this.description,this.price,this.category)
         .subscribe(response =>{
          console.log(response)
           if(response['status']=='success'){
             this.router.navigate(['/product-list'])
            //alert(['Product saved'])
           }else{
            
            alert(response['Error'])
           }
         })  
  }
  onCancel(){

  }

}
