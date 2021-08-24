import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({//decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//public
  title = 'hello balaji, welcome to Angular app!!!';
  toCounter = 'hello counter';
  //firstname = 'Balaji';//model
  userForm = { name: 'Balaji', dob: '' };//model
  users: any = [];
  constructor(private appService: AppService) {

  }

  handleClick() {
    this.appService.save(this.userForm,
      //success handler
      (response: any) => {
        console.log(response);
        this.users.push(response);
      },
      //error handler
      (error: any) => {
        alert(error);
      });
    console.log(this.userForm);
  }

  delete() {
    console.log("deleted button");
  }

  deleteUser(userId: number, index: number) {
    this.appService.deleteUser(userId,
      //success handler
      (response: any) => {
        this.users.splice(index, 1);
      });
    console.log("deleted User id: " + userId);
  }
}
