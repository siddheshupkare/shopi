import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  catName:any
  categoryItems: any;
  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params)=>{
      console.log(params['name'])
      this.catName=params['name']
    })

    this.prodData();
  }

  prodData()
  {
    this.http.get("https://fakestoreapi.com/products/category/"+this.catName).subscribe(data=>{
      console.log(data);
      this.categoryItems=data;
    })
  }

}
