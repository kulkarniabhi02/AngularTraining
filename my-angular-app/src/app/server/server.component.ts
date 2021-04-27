import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  userName = '';
  disabledBtn = (this.userName.length === 0);
  constructor() { }

  ngOnInit(): void {
  }

  showInputData(): void {
    this.userName = '';
    this.onUpdateEvent(this.userName);
  }

  onUpdateEvent(userName): void {
    this.disabledBtn = (this.userName.length === 0);
  }

}
