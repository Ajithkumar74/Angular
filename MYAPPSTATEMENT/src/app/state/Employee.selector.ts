import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./Employee.reducers";
import Employee from "../vmodel/Employee";

const selectRootAppState = createFeatureSelector<AppState>("employees");

export const selectEmployees = createSelector(
    selectRootAppState,
    (state:AppState)=>state.employees);

export const selectEmployeeById = createSelector(
    selectEmployees,
    (employees:Employee[],props:{id:number})=>employees.find(emp=>emp.id==props.id)
) 