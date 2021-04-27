import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  successMessage = 'Success works...!!!';
  enableClickMe = false;
  showButtonClickedMessage = 'Button is not clicked';
  showInputValue = '';
  constructor() {
    setTimeout(() => {
      this.enableClickMe = true;
    }, 2000);
  }

  onBtnClick(): void {
    this.showButtonClickedMessage = 'button is clicked.';
  }

  onUpdateInputEvent(event: Event): void {
    const eventTarget = event.target as HTMLInputElement;
    this.showInputValue = eventTarget.value;
  }

  ngOnInit(): void {
  }

}
