import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prod: any
  constructor(private http: HttpClient, private activatedroute: ActivatedRoute) { }
  myid:any
  ngOnInit(): void {
    this.activatedroute.params.subscribe((params)=>{
      console.log(params['id'])
      this.myid=params['id']
    })
    this.getProductDetails()
  }

  getProductDetails()
  {
    this.http.get("https://fakestoreapi.com/products/"+this.myid).
    subscribe((data)=>{
      this.prod=data
      console.log(data)
    })
  }

}
