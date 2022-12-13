import { Component } from '@angular/core';
import { OBSERVABLE } from '../constant/route';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data = [
    {
      name:'rxjs',
      routerLink: OBSERVABLE.path,
    }
  ]

}
