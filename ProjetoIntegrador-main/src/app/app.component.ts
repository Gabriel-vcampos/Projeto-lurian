import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLogComponent } from './components/header-log/header-log.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { TestesComponent } from './pages/testes/testes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,],
  templateUrl: './app.component.html',
  // template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'projeto-integrador';
}
