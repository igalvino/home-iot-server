import { Component, OnInit, ErrorHandler } from '@angular/core';
// import { Servers } from '../mockServers';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { LocalServer } from '../../../../remote/src/models/sharedInterfaces';
import { Local } from 'protractor/built/driverProviders';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: LocalServer[];
  selectedServer: LocalServer;

  NewServer: LocalServer = {
    connectionStatus: false,
    displayName: '',
    localServerId: '',
    macAddress: '',
    validUsers: []
  };



  servers_url: string = "/API/servers";
  constructor(private http: HttpClient, private router: Router) {
    this.getServersFromServer();

  }

  ngOnInit() {
  }

  async getServersFromServer() {
    try {
      this.servers = await this.http.get<LocalServer[]>(this.servers_url).toPromise();

    }
    catch (error) {
      if (error.status === 401 || error.status === 403)
        this.router.navigate(['/API/administration/auth/login']);
    }
  }

  async deleteServerRequest(ServerToDelete: LocalServer) {
    this.servers.forEach(async server => {
      if (ServerToDelete.localServerId == server.localServerId) {

        try {
          await this.http.delete<LocalServer>(this.servers_url + "/" + ServerToDelete.localServerId).toPromise();
        }
        catch (error) { }
      }
    });
  }



  async postNewServer(NewServer: LocalServer) {

    try {
      await this.http.post(this.servers_url, {
        displayName: NewServer.displayName,
        localServerId: NewServer.localServerId,
        macAddress: NewServer.macAddress,
        validUsers: NewServer.validUsers,
        connectionStatus: NewServer.connectionStatus
      }).toPromise();
      this.servers.push(NewServer);
    }
    catch (error) {
      console.log(error);
    }
  }


  async editServer(server: LocalServer) {
    this.servers.forEach(async serverToEdit => {

      if (serverToEdit.localServerId == server.localServerId) {

        try {
          await this.http.put<LocalServer>(this.servers_url + "/" + server.localServerId, serverToEdit).toPromise();

        }
        catch (error) {

        }
      }
    });

  }

  async authKeyRequest(server: LocalServer) {
    this.servers.forEach(async serv => {

      if (serv.localServerId == server.localServerId) {

        try {
          const apikey = await this.http.post<string>(`${this.servers_url}/auth/${server.localServerId}`, {}).toPromise();
          swal.fire({type: 'info', title: 'key for authentication' , showCloseButton: true, html:   
          apikey + '<br/><br/>'  + 
           '<b> CAUTION: you may be disconnected now  </b>'})
           
        }
        catch (error) {

        }
      }
    });
  }

  onSelect(server: LocalServer): void {
    this.selectedServer = server;
  }

}
