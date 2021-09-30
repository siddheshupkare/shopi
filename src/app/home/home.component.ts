import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isChecked = true;
  category:any;

  nasadata:any
  constructor(private http:HttpClient, private productservice: ProductsService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getNasaData()
  {
      this.http.get("https://api.nasa.gov/planetary/apod?api_key=3dLnCam49LTronO3ZIeZ9qFrVNrvyvvvnwIaakYf")
      .subscribe(data=>
        {
          this.nasadata=data
          console.log(data)
        })
  }

  getCategory()
  {
    this.http.get("https://fakestoreapi.com/products/categories").subscribe(data=>{
      this.category=data
      console.log(data)
    })



  }

}
