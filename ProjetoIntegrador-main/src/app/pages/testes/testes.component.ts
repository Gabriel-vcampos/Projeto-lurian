import { Component } from '@angular/core';
import { HeaderLogComponent } from '../../components/header-log/header-log.component';
import { FormSignInComponent } from '../../components/form-sign-in/form-sign-in.component';
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-testes',
  imports: [HeaderLogComponent, FormLoginComponent],
  templateUrl: './testes.component.html',
  styleUrl: './testes.component.scss'
})
export class TestesComponent {

}
