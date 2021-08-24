import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable() //behaves similar to @Autowired
export class AppService {

    constructor(private http: HttpClient) {

    }

    save(form: any, success: any, error: any) {
        const promise = this.http.post("http://localhost:3000/users", form);

        promise.subscribe(success, error);
        console.log("service method save() called");
    }

    deleteUser(userId: number, success: any) {
        const promise = this.http.delete("http://localhost:3000/users/" + userId);
        promise.subscribe(success);
    }
}