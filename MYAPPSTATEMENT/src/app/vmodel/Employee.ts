import Department from "./Department";

interface Employee {
    id: number;
    name:string;
    dept:string;
    age:number;
    depts:Department[]

}

export default Employee;