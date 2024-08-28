import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [],
  template: `
            <div class="sub-header">
                <div class="subheader-third left">
                    @if (firstButton != '') {
                        <button >{{ firstButton }}</button>
                    }
                    @if (secondButton != '') {
                        <button>{{ secondButton }}</button>
                    }
                    @if (thirdButton != '') {
                        <button>{{ thirdButton }}</button>
                    }
                </div>
                <div class="subheader-third middle">
                    <!-- <app-function-button /> -->
                    <!-- <app-search-bar /> -->
                </div>
                <div class="subheader-third right">
                    <!-- <app-function-button /> -->
                </div>
            </div>
            `,
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
    @Input() firstButton = '';
    @Input() secondButton = '';
    @Input() thirdButton = ''; 
    @Input() rightSideButton = '';
    @Input() rightSideButtonIcon = '';
}
