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
  users: any = [];
  constructor(private appService: AppService) {

  }

  handleClick() {
    this.appService.save(this.firstname,
      //success handler
      (response: any) => {
        console.log(response);
        this.users.push(response);
      },
      //error handler
      (error: any) => {
        alert(error);
      });
    console.log(this.firstname);
  }

  delete() {
    console.log("deleted button");
  }
}
