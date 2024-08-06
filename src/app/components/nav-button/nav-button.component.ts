import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [],
  template:`<a href="{{routePath}}">
                <img src="{{iconSource}}" alt="{{altText}}">
            </a>`,
  styleUrl: './nav-button.component.scss'
})

export class NavButtonComponent {
    @Input() routePath = '';
    @Input() iconSource = '';
    @Input() altText = '';
}