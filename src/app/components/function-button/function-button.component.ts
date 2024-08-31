import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-function-button',
  standalone: true,
  imports: [],
  template: `
    <div class="button {{ type }} border-{{ borderColor }} {{ color }}">
      @if (iconSource != '') {
        <img class="icon" src="{{ iconSource }}"/>
      }
      <span>{{ text }}</span>
    </div>
  `,
  styleUrl: './function-button.component.scss'
})

export class FunctionButtonComponent {
  @Input() text: string = 'button';
  @Input() type: 'single' | 'left' | 'middle-row' | 'middle-column' |
  'right' | 'top' | 'bottom' | string = 'middle';
  @Input() iconSource: string = '';
  @Input() color: 'lead' | 'orange' | 'gray' | string = 'gray';
  @Input() borderColor: 'lead' | 'orange' | 'gray' | string = 'orange';
}
