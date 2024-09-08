import { Component } from '@angular/core';
import { SubHeaderComponent } from "../../components/sub-header/sub-header.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-registrations-page',
  standalone: true,
  imports: [SubHeaderComponent, TableComponent],
  templateUrl: './registrations-page.component.html',
  styleUrl: './registrations-page.component.scss'
})
export class RegistrationsPageComponent {

}
