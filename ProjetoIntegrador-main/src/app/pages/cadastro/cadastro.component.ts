import { Component } from '@angular/core';
import { HeaderLogComponent } from '../../components/header-log/header-log.component';
import { FormSignInComponent } from '../../components/form-sign-in/form-sign-in.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderLogComponent, FormSignInComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
