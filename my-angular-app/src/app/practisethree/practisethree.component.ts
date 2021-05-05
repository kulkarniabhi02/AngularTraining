import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practisethree',
  templateUrl: './practisethree.component.html',
  styleUrls: ['./practisethree.component.css']
})
export class PractisethreeComponent implements OnInit {
  count = 0;
  arrTrackClick = [];
  isToggleParagraph = false;
  constructor() { }

  ngOnInit(): void {
  }

  onTogglePragraph(): void {
    this.isToggleParagraph = !this.isToggleParagraph;
    this.arrTrackClick.push(++this.count);
  }

}
