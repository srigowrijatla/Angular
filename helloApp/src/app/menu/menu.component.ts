import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { provideRouter, Route, RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) { } // 
}