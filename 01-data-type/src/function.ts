console.log("====================Function======================");

//Penulisan Function Declarationnya
function calculate(argOne: number, argTwo: number): string {
    var result: number = argOne + argTwo;
    var resultInString: string = result.toString();
    return resultInString;
}

function printInformation(argOne: string, argTwo: string): void {
    console.log(argOne + " " + argTwo);
}

console.log(typeof calculate);
console.log("Calculation result " + calculate(25, 26.5));
printInformation("Hello", "World");

//Penulisan Function Expressionnya
let menghitung: { (argOne: number, argTwo: number): string } = calculate;
let mencetakInformasi: { (argOne: string, argTwo: string): void } = printInformation;

console.log("Menghitung " + menghitung(30, 47.5));
mencetakInformasi("Halo", "Dunia");

var contohPerhitungan: { (bilanganSatu: number, bilanganDua: number, bilanganTiga: number): number } = function (bilanganSatu: number, bilanganDua: number, bilanganTiga: number): number {
    var result = (bilanganSatu + bilanganDua) * bilanganTiga;
    return result;
};

console.log("Hasil contoh perhitungan: " + contohPerhitungan(2, 5, 3));

//Contoh syntax arrow function
let menghitungOne = (sisi: number): number => {
    const luas = sisi * sisi;
    return luas;
}
console.log(menghitungOne(5));

let menghitungTwo = (sisi: number): void => console.log(sisi * sisi);
menghitungTwo(6);

let menghitungThree =  (sisi: number): number => sisi * sisi;
console.log(menghitungThree(7));

//Penulisan Contextual Typing
let helloFunction: { (argName: string): void };
helloFunction = function (nama) {
    console.log("Nama saya adalah: " + nama);
}
helloFunction("Ben");

//Default Parameter, sama seperti ES, typescript juga bisa menggunakan Default Parameter.
let calculation = function (angkaPertama:any, angkaKedua = 2): number {
    return angkaPertama * angkaKedua;
}
console.log(calculation(7, 3));
console.log(calculation(5)); //Default parameter 2 bertindak di sini.

//Optional Parameter: mirip seperti default parameter, bedanya adalah kita tidak wajib untuk mengisi parameternya sama sekali.
//Jadi bisa dibilang seperti nullable parameter. (optional parameter hanya ada di typescript, tidak ada di ES)
let optionalCalculation = function (angkaPertama: number, angkaKedua: number, decision?: string): number {
    if (!decision) {
        return angkaPertama * angkaKedua;
    }
    return angkaPertama + angkaKedua;
}
console.log(optionalCalculation(5, 6));
console.log(optionalCalculation(5, 6, "something"));

//Rest Parameter: parameter terakhir yang bisa merubah muliple parameter menjadi array
//Rest parameter ini sama seperti feature pada ES
function printAndCalculate(firstArg: number, ...secondArg: string[]):void {
    console.log("Argument pertama: " + firstArg);
    console.log(secondArg);
    console.log(firstArg * secondArg.length)
}
printAndCalculate(6, "Satu", "Dua", "Tiga");

//Spread parameter hanya bisa kalau kita menggunakan Tuple
let people: [string, string, string] = ['Anwar', 'Jaka', 'Ben'];
function printAllPeople(firstPerson: string, secondPerson: string, thirdPerson: string): void{
    console.log(firstPerson);
    console.log(secondPerson);
    console.log(thirdPerson);
}
printAllPeople(...people);

//TypeScript punya tuple sama seperti pada C#, memungkinkan sebuah function untuk return multiple value type
//Selama bisa diterima oleh tuple deconstructor
function getUserInfo(): [string, number, boolean] {
    const nama:string = 'Alice';
    const umur:number = 30;
    const sudahMenikah:boolean = true;
    return [nama, umur, sudahMenikah];
}
const [name, age, isMarried] = getUserInfo();
console.log(`Namanya: ${name}, Umurnya: ${age}, Sudah Menikah: ${isMarried}`);

/*
    Function Overload:
    Sama seperti C# dan Java, Typescript juga melakukan implementasi terhadap overloading function.
    Tetapi pada dasarnya Typescript juga merupakan superset daripada javascript, sehingga setiap function tidak memiliki feature signature.

    Jadi implementasinya menggunakan trick lain, yaitu dengan menggunakan template method.
    Dengan kata lain ragam signaturenya sangat terbatas.
*/

//Ini tidak bisa dilakukan karena tidak bisa karena jumlah parameter yang berbeda dengan implementasinya
// function alternative(firstArg: number):void;
// function alternative(firstArg: string):void;

function alternative(firstArg: number, secondArg: number): number;
function alternative(firstArg: string, secondArg: number): string;

//Ini bisa dilakukan selama parameternya bisa related dengan template yang ada.
function alternative(firstArg: any, secondArg: number): any {
    //aplikasinya sama seperti currying function pada js
    if (typeof firstArg == "number") {
        return firstArg * secondArg;
    }
    var letter: string = "Two word is: " + firstArg;
    return letter;
}

console.log(alternative(10, 20));
console.log(alternative("Hello World", 13));