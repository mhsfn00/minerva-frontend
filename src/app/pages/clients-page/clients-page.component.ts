import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { TableComponent } from '../../components/table/table.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [SubHeaderComponent, TableComponent, NavBarComponent],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent {

}
