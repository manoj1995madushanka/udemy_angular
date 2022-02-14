import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`h3 {
    color: aqua
  }`]
})
export class ServerComponent implements OnInit {

  serverId:number=10;
  serverStatus:string='online';

  constructor() {
  }

  ngOnInit(): void {
  }

}
