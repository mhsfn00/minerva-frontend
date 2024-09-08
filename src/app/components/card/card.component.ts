import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card-container">
        <div class="title-container">
            <img class="icon" src="{{ iconSource }}" />
            <label class="title">{{ title }}</label>
        </div>
        <div class="orange-line"></div>
        <div class="info-container">
            @if(infoType === 'calls') {
                <p>{{ survey }} Vistoria agendada</p>
                <p>{{ maintenance }} Serviço agendado</p>
                <p>{{ closed }} Finalizados</p>
                <p>{{ canceled }} Cancelados</p>
            }
            @if (infoType === 'messages') {
                Nenhuma mensagem nova no momento
            }
            @if (infoType === 'warnings') {
                Nenhum aviso no momento
            }
        </div>
    </div>
  `,
  styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() iconSource : string = '';
    @Input() title : string = '';
    @Input() infoType : string = '';

    survey : number = 0;
    maintenance : number = 0;
    closed : number = 0;
    canceled : number = 0;
}
