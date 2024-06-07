import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppState } from './state/Employee.reducers';
import { Store } from '@ngrx/store';

import * as EmployeeAction from '../app/state/Employee.action';
import { Observable } from 'rxjs';
import { selectEmployees } from './state/Employee.selector';
import { AsyncPipe, NgFor } from '@angular/common';
import Employee from './vmodel/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncPipe,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  title = 'myappstatemgmt';
  employees?:Observable<Employee[]>;

  constructor(private store:Store<AppState>){
    this.employees = this.store.select(selectEmployees);
  }

  ngOnDestroy(): void {
    // Clean up  
  }

  onLoadEmployees(){
    this.store.dispatch(EmployeeAction.loadEmployees());
  }

  onAddEmployees(){
    let emp:Employee = {
      id: Math.round(Math.random() * 100),
      name: 'SuperStar',
      dept: 'Finance',
      age: 32,
      depts: []
    }
    this.store.dispatch(EmployeeAction.addEmployee({employee:emp}));
  }
}
