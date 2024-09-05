import { Component } from '@angular/core';
import { SubHeaderComponent } from "../../components/sub-header/sub-header.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-calls-page',
  standalone: true,
  imports: [SubHeaderComponent, TableComponent],
  templateUrl: './calls-page.component.html',
  styleUrl: './calls-page.component.scss'
})
export class CallsPageComponent {

}
