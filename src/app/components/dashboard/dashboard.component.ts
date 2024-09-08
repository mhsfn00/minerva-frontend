import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="dashboard-container">
        <div class="side">
            <div class="half">
                <app-card
                    title="Meus Chamados"
                    iconSource="/app/assets/callsIconLead.png"
                    infoType="calls"
                />
                <app-card
                    title="Mensagens"
                    iconSource="/app/assets/mailIcon.png"
                    infoType="messages"
                />
            </div>
        </div>
        <div class="side">
            <div class="half">
                <app-card
                    title="Todos Chamados"
                    iconSource="/app/assets/callsIconLead.png"
                    infoType="calls"
                />
                <app-card
                    title="Avisos"
                    iconSource="/app/assets/warnIcon.png"
                    infoType="warnings"
                />
            </div>
        </div>
    </div>
  `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
