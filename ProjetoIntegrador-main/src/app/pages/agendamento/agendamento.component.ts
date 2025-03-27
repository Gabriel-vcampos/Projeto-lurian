import { Component } from '@angular/core';
import { HeaderConfigComponent } from '../../components/header-config/header-config.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TabelaPedidosComponent } from '../../components/tabela-pedidos/tabela-pedidos.component';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [HeaderConfigComponent, SidebarComponent, TabelaPedidosComponent],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.scss',
})
export class AgendamentoComponent {}
