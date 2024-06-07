import { createAction, props } from "@ngrx/store";
import Employee from "../vmodel/Employee";

export const loadEmployees=createAction('[Employees] - Load All the Employees');;
export const loadEmployeesSuccess=createAction('[Employees] - Load All the Employees success',props<{employees:Employee[]}>());;
export const loadEmployeesError=createAction('[Employees] - Load All Employee Error',props<{error:Employee[]}>());;

export const addEmployee=createAction('[Employees] - Add Employee',props<{employee:Employee}>());;
