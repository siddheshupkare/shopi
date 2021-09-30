import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  sampleData: any;
  constructor() { }

  getdata()
  {
    return this.sampleData
  }

  setData( value: string)
  {
    this.sampleData= value
 }
}
