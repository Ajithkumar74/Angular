import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import EmployeeService from "../service/EmployeeService";
import * as EmployeeAction from "./Employee.action";
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class EmployeeEffects {

    constructor(private actions:Actions,private empService:EmployeeService){}

    loadEmployees$ = createEffect(
        ()=>this.actions.pipe(
            ofType(EmployeeAction.loadEmployees),
            mergeMap(
                ()=>this.empService.fetchEmployees().pipe(
                    map((employees)=>EmployeeAction.loadEmployeesSuccess({employees})),
                    catchError((error)=>of(EmployeeAction.loadEmployeesError({error:error.message})))
                )
            )
        )
    )
}