import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserLoginDto } from "../../models/UserLoginDto";

@Injectable()
export class HttpRequest {
    constructor(private http: HttpClient){}

    PopularSchools(){
        return this.http.get('http://localhost:5119/api/College/GetPopular');
    }

    GetHallRatings(id: number) {
        return this.http.get(`http://localhost:5119/api/Rating/Hall/${id}`);
    }

    GetCollege(){
        return this.http.get('http://localhost:5119/api/College/GetCollege/1');
    }

    GetSchoolHalls(id: number){
        return this.http.get(`http://localhost:5119/api/Hall/CollegeHalls/${id}`);
    }

    GetRatingDetails(id: number){
        return this.http.get(`http://localhost:5119/api/Rating/HallDetails/${id}`);
    }

    AddUser(username: string, password: string, redopassword: string){
        let body = {
            username: username,
            password: password,
            redopassword: redopassword
        };
        return this.http.post('http://localhost:5119/api/rp/AddUser', body);
    }

    Login(loginInfo: UserLoginDto){
        // console.log("at sending");
        return this.http.post('http://localhost:5119/api/User/login', loginInfo);
        
    }
}