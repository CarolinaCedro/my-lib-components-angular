import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {


  getHelloWorl() {
    return "Hello world of my first lib on angular"
  }

}
