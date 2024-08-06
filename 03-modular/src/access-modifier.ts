//public by default

class Superior {
    public name: string;
    protected grade: number;
    private accessNumber: number;
    public constructor(name: string, grade: number, accessNumber: number) {
        this.name = name;
        this.grade = grade;
        this.accessNumber = accessNumber;
    }
    public printInformation() {
        console.log("Namanya adalah: " + this.grade);
    }
}

class Supervisor extends Superior {
    public team: string;
    private shift: string;
    constructor(name: string, grade: number, team: string, shift: string) {
        super(name, grade);
        this.team = team;
        this.shift = shift;
    }
    public printSuperiorInfo() {
        console.log("Work with team: " + this.team);
    }
    private getSalary() {
        return 12000000;
    }
    public printAccessCardNumber() {
        //console.log(this.accessNumber);
        //Sifatnya private jadi tidak bisa di akses walaupun masih extend
    }
    public printGrade() {
        console.log("The grade is: " + this.grade);
    }
}

let adrian: Supervisor = new Supervisor("Adrian Maulana", 6, "Team A", "Night Shift");

//console.log(adrian.grade);
//tidak bisa diakses karena protected

//adrian.getSalary();
//tidak bisa diakses karena private