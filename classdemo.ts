import { IEmployee } from './IEmployee';

class Employee implements IEmployee {
    private eid: number;
    fname: string;
    salary: number;

    constructor(id: number, name: string) {
        this.eid = id;
        this.fname = name;
    }

    get empid() {
        return this.eid;
    }

    set emplid(id: number) {
        this.eid = id;
    }

    add(): number {
        return 1 + 1;
    }

    sub(): void {
        1 - 1;
    }

    addEmp() {

    }
    getEmp() {
    }

    deleteEmp()
    {
        
    }
}