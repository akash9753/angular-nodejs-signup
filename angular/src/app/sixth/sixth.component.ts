import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {

  fullName = ''
  phoneNumber= ''
  age = ''
  email = ''
  address = ''

  constructor() { }

  ngOnInit(): void {
  }
  onSave(){
    console.log(`name : ${this.fullName}`)
    console.log(`address : ${this.address}`)
    console.log(`email : ${this.email}`)
    console.log(`age : ${this.age}`)
    console.log(`phoneNumber : ${this.phoneNumber}`)
  }

  onCancel(){
    this.address = ''
    this.age = ''
    this.email =''
    this.fullName =''
    this.phoneNumber =''
  }

}
