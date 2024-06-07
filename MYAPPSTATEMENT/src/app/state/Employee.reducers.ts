import { createReducer, on } from "@ngrx/store";
import * as EmployeeAction from './Employee.action';
import EmpType from "../vmodel/EmpType";
import Employee from "../vmodel/Employee";

//Store Type
export interface AppState {
    employees:Employee[],
    isLoading:boolean
}

export interface AppState2 {
    employees:Employee[],
    empType?:EmpType,
    isLoading:boolean
}

export const initialState : AppState = {
    employees:[
        // {"id":11,"name":"personAx","dept":"Financex","age":55},
        // {"id":22,"name":"personBx","dept":"Hrx","age":45},
    ],
    isLoading:false
}

export const EmployeesReducer = createReducer(
    initialState,
    on(
        EmployeeAction.loadEmployees,
        (state)=>{
            return {
                ...state,
                isLoading:true
            }
        }
    ),
    on(
        EmployeeAction.loadEmployeesSuccess,
        // (state,{employees})=>({...state,employees,isLoading:false})               
        (state,{employees})=>{
            console.log("Reducer-s..." + state);
            console.log("Reducer-pl..." + employees);
            return {
                ...state,
                employees,
                isLoading:false
            };
        }
    ),
    on(
        EmployeeAction.loadEmployeesError,
        (state,{error})=>({...state,error,isLoading:false})
    ),
    on(
        EmployeeAction.addEmployee,
        (state,{employee})=>({...state,employees:[...state.employees,employee],isLoading:false})
    )
)

