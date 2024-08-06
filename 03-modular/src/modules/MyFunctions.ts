export default function printHelloWorld():void {
    console.log('Hello World');
}

export function jumlahkanAngka(angkaPertama:number, angkaKedua:number):number{
    return angkaPertama + angkaKedua;
}

const multiplyNumber = function(numberOne: number, numberTwo: number):number{
    return numberOne * numberTwo;
}

const helloSomeone = (name:string):void => console.log(`Hello ${name}`);

export {multiplyNumber, helloSomeone};