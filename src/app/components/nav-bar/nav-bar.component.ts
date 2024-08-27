import { Component } from '@angular/core';
import { NavButtonComponent } from "../nav-button/nav-button.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}