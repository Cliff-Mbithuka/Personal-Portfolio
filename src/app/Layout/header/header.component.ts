import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
