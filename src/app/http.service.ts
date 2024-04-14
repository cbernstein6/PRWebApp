import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpRequest {
    constructor(private http: HttpClient){}

    getUsers() {
        return this.http.get('http://localhost:5119/api/rp/GetFirst');
    }

    PopularSchools(){
        return this.http.get('http://localhost:5119/api/rp/GetMostPopular');
    }

    GetCollege(){
        return this.http.get('http://localhost:5119/api/rp/GetCollegeById/1');
    }
}