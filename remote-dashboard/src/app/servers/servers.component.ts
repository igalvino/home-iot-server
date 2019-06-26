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
          swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.value) {
              await this.http.delete<LocalServer>(this.servers_url + "/" + ServerToDelete.localServerId).toPromise();
              swal.fire(
                'Deleted!',
                'The server has been deleted.',
                'success'
              )
            }
          })          
        }
        catch (error) { }
      }
    });
  }

  async postNewServer() {

    
      swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['name', 'Mac Address', 'Users']
      }).queue([
        {
          title: 'Enter Name',
          text: this.NewServer.displayName
        },
        {
          title: 'Enter Mac Address',
          text: this.NewServer.macAddress
        },
        {
          title: 'Enter Users',
          text: this.NewServer.validUsers[0]
        }
      ]).then(async (result) => {
        if (result.value) {
          try{
          await this.http.post(this.servers_url, {
            displayName: result.value[0],
            localServerId: "",
            macAddress: result.value[1],
            validUsers: result.value[2],
            connectionStatus: false
          }).toPromise(); 
          this.servers.push(this.NewServer);
        this.NewServer = null;
          swal.fire({
            title: 'All done!',
            html:
              'Your Server: <pre><code>' +
                JSON.stringify(result.value) +
              '</code></pre>',
            confirmButtonText: 'Lovely!'
        
          })
        }
        catch (error) {
          console.log(error);
        }

    }

   }
      )}
   
       


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
          swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, generate key!'
          }).then(async (result) => {
            if (result.value) {
              const apikey = await this.http.post<string>(`${this.servers_url}/auth/${server.localServerId}`, {}).toPromise();
              swal.fire({type: 'info', title: 'key for authentication' , showCloseButton: true, html:   
              apikey + '<br/><br/>'  + 
               '<b> CAUTION: you may be disconnected now  </b>'});
            }
          })

           
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
