import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'manoj madushanka';

  allowServer: boolean = false;
  serverCreationStatus: string = 'no server created yet';
  serverName: string = 'test';
  serverCreated = false;
  serverStatus: string;

  servers = ['server 1','server 2']
  serverNumber = 3;

  /**
   * after 2 seconds allowserver is true
   * */
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 200)

    // math.random generate random number within 0-1 range
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  /**
   * click event method
   * */
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push('server '+ this.serverNumber);
    this.serverNumber++;
    this.serverCreationStatus = 'server was created';
  }

  /**
   * event binding with parameter
   * */
  onUpdateServerName($event: Event) {
    this.serverName = (<HTMLInputElement>$event.target).value;
  }

  /**
   * return color of server status
   * */
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
