import { Component, OnInit } from '@angular/core';
import { loginReq } from "../loginRequest";
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private login_url = "/API/auth/login";

  myLoginReq: loginReq = {
    email: "f8a9632f97ff@casa-net.online",
    password: "casanet"
  }

  constructor(private http: HttpClient) { }



public async postLoginRequest(loginRequest: loginReq){
  try {
    await this.http.post(this.login_url, {
      email : loginRequest.email,
      password : loginRequest.password
    }).toPromise();
    console.log(`very good ${loginRequest.email}`);

  }
   catch (error) {
    console.log(error);
  }
}


}
