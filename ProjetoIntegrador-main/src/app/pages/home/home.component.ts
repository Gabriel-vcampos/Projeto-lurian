import { Component } from '@angular/core';
import { CardAnunciosComponent } from '../../components/card-anuncios/card-anuncios.component';
import { BotaoAgendaComponent } from '../../components/botao-agenda/botao-agenda.component';
import { BgManequimComponent } from '../../components/bg-manequim/bg-manequim.component';
import { CarrosselComponent } from '../../components/carrossel/carrossel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderHomeComponent } from '../../components/header-home/header-home.component';
import { TecidosComponent } from '../../components/tecidos/tecidos.component';

@Component({
  selector: 'app-home',
  imports: [
    CardAnunciosComponent, 
    BotaoAgendaComponent,
    BgManequimComponent,
    CarrosselComponent,
    FooterComponent,
    HeaderHomeComponent,
    TecidosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
