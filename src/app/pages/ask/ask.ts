import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  imports: [],
  templateUrl: './ask.html',
  styleUrl: './ask.css'
})
export class Ask {
  constructor(private router: Router) {}

  onYes() {
    this.router.navigate(['/celebrate']);
  }

  onNo() {
    this.router.navigate(['/please']);
  }
}
