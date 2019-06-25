import { Component, OnInit } from '@angular/core';
import { loginReq } from "../loginRequest";
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login_url = "/API/administration/auth/login";
  private 
  myLoginReq: loginReq = {
    email: "",//"f8a9632f97ff@casa-net.online",
    password: ""//"casanet"
  }

  constructor(private http: HttpClient, private router: Router) { }

  

public async postLoginRequest(loginRequest: loginReq){
  try {
    await this.http.post(this.login_url, {
      email : loginRequest.email,
      password : loginRequest.password
    }).toPromise();
    console.log(`very good ${loginRequest.email}`);
    this.router.navigate(['/dashboard/servers']);
  }
   catch (error) {
    Swal.fire({type: 'error', title: 'Failed to connect :( ' , showCloseButton: true, html:   
     '<b> please check your details </b>'})
    console.log(error);
  }
} 

}
