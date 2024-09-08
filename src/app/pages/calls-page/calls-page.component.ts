import { Component } from '@angular/core';
import { SubHeaderComponent } from "../../components/sub-header/sub-header.component";
import { TableComponent } from "../../components/table/table.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-calls-page',
  standalone: true,
  imports: [SubHeaderComponent, TableComponent, NavBarComponent],
  templateUrl: './calls-page.component.html',
  styleUrl: './calls-page.component.scss'
})
export class CallsPageComponent {

}
