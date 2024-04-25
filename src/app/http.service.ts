import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpRequest {
    constructor(private http: HttpClient){}

    PopularSchools(){
        return this.http.get('http://localhost:5119/api/College/GetPopular');
    }

    GetUserList() {
        return this.http.get('http://localhost:5119/api/User');
    }

    GetCollege(){
        return this.http.get('http://localhost:5119/api/College/GetCollege/1');
    }

    

    AddUser(username: string, password: string, redopassword: string){
        let body = {
            username: username,
            password: password,
            redopassword: redopassword
        };
        return this.http.post('http://localhost:5119/api/rp/AddUser', body);
    }
}