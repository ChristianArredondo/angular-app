import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .hide {
      display: none;
    }
    .whiteText {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2', 'TestServer 3'];
  showParagraph = false;
  clicks = [];
  numClicks = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
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
  toggleDisplay() {
    this.numClicks += 1;
    this.showParagraph = !this.showParagraph;
    this.clicks.push('Click #' + this.numClicks + ' at ' + new Date());
  }
  getClickColor() {
    // return this.numClicks >= 5 ? 'blue' : 'none';
    if (this.numClicks >=5) {
      return true;
    }
    else {
      return false;
    }
  }
}
