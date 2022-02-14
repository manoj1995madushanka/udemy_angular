import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'manoj madushanka';

  allowServer: boolean = false;

  /**
   * after 2 seconds allowserver is true
   * */
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 200)
  }
}
