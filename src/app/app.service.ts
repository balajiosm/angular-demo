import { Injectable } from '@angular/core';


@Injectable() //behaves similar to @Autowired
export class AppService {
    save() {
        console.log("This is saved via AppService");
    }
}