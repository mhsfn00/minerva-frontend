import { Component, Input } from '@angular/core';
import { getCalls, getClients } from '../../services/mockDb.js';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  template: `<table class="table" >
                @if(tableType == 'people') {
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                            <th>Cidade</th>
                            <th>Chamado em aberto</th>
                        </tr>
                    </thead>
                    <tbody class="table-body">
                        @for(client of clients; track client.name) {
                            <tr>
                                <td>{{ client.name }}</td>
                                <td>{{ client.phone }}</td>
                                <td>{{ client.eMail }}</td>
                                <td>{{ client.city }}</td>
                                <td>{{ client.openCall }}</td>
                            </tr>
                        }
                    </tbody>
                }
                @if(tableType == 'calls') {
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Assunto</th>
                            <th>Aberto em</th>
                            <th>Cliente</th>
                            <th>Urgência</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-body">
                        @for(call of calls; track call.number) {
                            <tr>
                                <td>{{ call.number }}</td>
                                <td>{{ call.reason }}</td>
                                <td>{{ call.dateCreated }}</td>
                                <td>{{ call.clientName }}</td>
                                <td>{{ call.urgency }}</td>
                                <td>{{ call.status }}</td>
                            </tr>
                        }
                    </tbody>
                }
                @if(tableType == 'buildings') {
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cliente</th>
                            <th>Cidade</th>
                            <th>Chamado em aberto</th>
                        </tr>
                    </thead>
                }
            </table>`,
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableType : 'people' | 'calls' | 'buildings' | String = '';
  calls = getCalls();
  clients = getClients();
}
