import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, DashboardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
