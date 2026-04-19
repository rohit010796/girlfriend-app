import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-please',
  imports: [],
  templateUrl: './please.html',
  styleUrl: './please.css'
})
export class Please {
  constructor(private router: Router) {}

  onYes() {
    this.router.navigate(['/celebrate']);
  }
}
