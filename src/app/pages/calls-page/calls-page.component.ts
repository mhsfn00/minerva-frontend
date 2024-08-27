import { Component } from '@angular/core';
import { SubHeaderComponent } from "../../components/sub-header/sub-header.component";

@Component({
  selector: 'app-calls-page',
  standalone: true,
  imports: [SubHeaderComponent],
  templateUrl: './calls-page.component.html',
  styleUrl: './calls-page.component.scss'
})
export class CallsPageComponent {

}
