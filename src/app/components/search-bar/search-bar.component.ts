import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  template: `
    <div class=search-bar-container>
      <img src="/app/assets/searchIcon.png" />
      <input type="text" />
    </div>
  `,
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

}