import { Component, Input } from '@angular/core';
import { FunctionButtonComponent } from '../function-button/function-button.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [FunctionButtonComponent, SearchBarComponent],
  template: `
            <div class="sub-header">
                <div class="subheader-third left">
                    @if (firstButton != '') {
                        <app-function-button
                            text="{{ firstButton }}"
                            type="left"
                        />
                    }
                    @if (secondButton != '') {
                        <app-function-button
                            text="{{ secondButton }}"
                            type="middle"
                        />
                    }
                    @if (thirdButton != '') {
                        <app-function-button
                            text="{{ thirdButton }} "
                            type="right"
                            borderColor="orange"
                        />
                    }
                </div>
                <div class="subheader-third middle">
                    <app-search-bar
                        class="search-bar"
                        placeHolder="{{ searchPlaceholder }}" 
                    />
                </div>
                <div class="subheader-third right">
                    <app-function-button 
                        text="{{ rightSideButton }}"
                        type="single"
                        iconSource="{{ rightSideButtonIcon }}"
                    />
                </div>
            </div>
            `,
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
    @Input() firstButton : string = '';
    @Input() secondButton : string = '';
    @Input() thirdButton : string = ''; 
    @Input() rightSideButton : string = '';
    @Input() rightSideButtonIcon : string = '';
    @Input() searchPlaceholder : string = 'Busque';
}
