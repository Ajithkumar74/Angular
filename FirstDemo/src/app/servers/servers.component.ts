import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
}
