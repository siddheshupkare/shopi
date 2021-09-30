import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  title="LOGIN PAGE";

  username: any;
  password: any;


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  formSubmit(data: NgForm)
  {
    console.log(data.value.username)
    this.username= data.value.username
    this.password= data.value.password
    localStorage.setItem("username",this.username)
    localStorage.setItem("password", this.password)
    alert("USER REGISTERED")
    data.resetForm();
  }

  loginSubmit(data: NgForm)
  {
    const name= localStorage.getItem("username")
    const password= localStorage.getItem("password")
    this.username= data.value.username
    this.password= data.value.password
    if(this.username == name && this.password== password)
    {
      alert("LOGGEDIN   Success")
      this.route.navigate(['/home'])
    }
    else{
      alert("Login Failed")
    }


  }

}
