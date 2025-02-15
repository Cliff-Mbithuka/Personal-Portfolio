import { Component } from '@angular/core';
import {Router, RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavOpen = false; // Initial state: nav is closed

  constructor(private router: Router) {}

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false; // Close the menu when a link is clicked
  }
}
