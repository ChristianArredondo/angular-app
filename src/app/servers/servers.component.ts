import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  serverCreated= false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Your server name is: ' + this.serverName;
  }
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
  checkUsername() {
    let currentUsername = (<HTMLInputElement>document.getElementById('usernameText')).value;
    if ( currentUsername === '') {
      return true;
    }
    else {
      return false;
    }
  }
  resetUsername() {
    this.username = '';
  }
}
