import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isUserAuth } from './services/mockDb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <body>
        <router-outlet />
    </body>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'minerva';
  userAuth = isUserAuth();
}
