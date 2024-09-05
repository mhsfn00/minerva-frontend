import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  template: `
    <div class=search-bar-container>
      <img class="search-icon" src="/app/assets/searchIcon.png" />
      <input class="search-bar" type="text" placeholder="{{ placeHolder }}"/>
    </div>
  `,
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
    @Input() placeHolder : string = 'Busque';
}