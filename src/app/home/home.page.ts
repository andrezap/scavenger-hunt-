import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private logo = 'assets/img/logo.png';

  constructor(private router: Router) {}

  public start() {
    this.router.navigate(['q1']);
  }
}
