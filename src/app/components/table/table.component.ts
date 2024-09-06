import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  template: `<table class="table" >
                <thead>
                    @if(tableType == 'people') {
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                            <th>Cidade</th>
                            <th>Chamado em aberto</th>
                        </tr>
                    }
                    @if(tableType == 'calls') {
                        <tr>
                            <th>Número</th>
                            <th>Assunto</th>
                            <th>Aberto em</th>
                            <th>Cliente</th>
                            <th>Urgência</th>
                            <th>Status</th>
                        </tr>
                    }
                    @if(tableType == 'buildings') {
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cliente</th>
                            <th>Cidade</th>
                            <th>Chamado em aberto</th>
                        </tr>
                    }
                </thead>
                <tbody class="table-body">
                    <tr>
                        <td>José Carlos da Silva</td>
                        <td>(44) 99887-38288</td>
                        <td>chunmei4899&#64;mail.com</td>
                        <td>Maringá-PR</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>José Carlos da Silva</td>
                        <td>(44) 99887-38288</td>
                        <td>chunmei4899&#64;mail.com</td>
                        <td>Maringá-PR</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>José Carlos da Silva</td>
                        <td>(44) 99887-38288</td>
                        <td>chunmei4899&#64;mail.com</td>
                        <td>Maringá-PR</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>José Carlos da Silva</td>
                        <td>(44) 99887-38288</td>
                        <td>chunmei4899&#64;mail.com</td>
                        <td>Maringá-PR</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>José Carlos da Silva</td>
                        <td>(44) 99887-38288</td>
                        <td>chunmei4899&#64;mail.com</td>
                        <td>Maringá-PR</td>
                        <td>Sim</td>
                    </tr>
                </tbody>
            </table>`,
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableType : 'people' | 'calls' | 'buildings' | String = '';
}
