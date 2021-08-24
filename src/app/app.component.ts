import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({//decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//public
  title = 'hello balaji, welcome to Angular app!!!';
  firstname = 'Balaji';//model

  constructor(private appService: AppService) {

  }

  handleClick() {
    this.appService.save(this.firstname);
    console.log(this.firstname);
  }

  delete() {
    console.log("deleted button");
  }
}
