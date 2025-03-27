import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { HeaderLogComponent } from '../../components/header-log/header-log.component';

@Component({
  selector: 'app-login',
  imports: [HeaderLogComponent, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
