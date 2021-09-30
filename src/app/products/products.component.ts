import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  myData=["First","Second","Third","Fourth","Fifth"]

  myproducts: any;

  // products=[
  //   {title: "Realme",model:"nazro",price:10000, imgUrl: "assets/images/realme.jpeg"},
  //   {title:"Honor", model:"PLay",  price:20000},
  //   {title:"Iphone", model:"iphone13", price:100000, imgUrl: "assets/images/iphone.png"},
  //   {title:"Nokia", model:"nokia 8.1", price: 20000, imgUrl: "assets/images/nokia 8.png"}
  // ]

  ngOnInit(): void {
    this.getData()
  }

  getData()
  {
    this.http.get("https://fakestoreapi.com/products").subscribe(mydata=>{
    this.myproducts=mydata
    console.log(mydata)})
  }

}
