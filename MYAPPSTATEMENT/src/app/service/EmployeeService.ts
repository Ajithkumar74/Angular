import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";
import Employee from "../vmodel/Employee";

@Injectable({
    providedIn:'root'
})
export default class EmployeeService {

    url:string = "http://localhost:3000/";

    constructor(private httpClient:HttpClient){}   

    fetchEmployees():Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.url}employee`).pipe(delay(3000));
    }
}