import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  mydata:any

  studentsData:any


 list:any =[];

  ngOnInit(): void {
    this.getList()
  }


  getdata()
  {
    var newdata=this.mydata
    console.log(this.mydata)

    this.list.push(newdata)
    console.log(this.list)
  }

  getList()
  {
      this.http.get("http://localhost:3000/list").subscribe(data=>
      {
        this.studentsData=data
        console.log(data)
      }
      )
  }

}
