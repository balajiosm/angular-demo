import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable() //behaves similar to @Autowired
export class AppService {

    constructor(private http: HttpClient) {

    }

    save(firstName: String, success: any, error: any) {
        const promise = this.http.post("http://localhost:3000/users",
            {
                "name": firstName,
                "age": 100
            }
        );

        promise.subscribe(success, error);
        console.log("service method save() called");
    }
}