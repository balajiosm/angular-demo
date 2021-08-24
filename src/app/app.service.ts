import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable() //behaves similar to @Autowired
export class AppService {

    constructor(private http: HttpClient) {

    }

    save() {
        const promise = this.http.post("http://localhost:3000/users",
            {
                "name": "Wow",
                "age": 100
            }
        );

        promise.subscribe(function (response) {
            console.log(response);
        });
        console.log("service method save() called");
    }
}