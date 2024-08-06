console.log("====================Primitive Data Type======================");

/**
Primitive data type / Buil-in data type javascript sekarang bisa di tulis atau di deklarasi dengan menggunakan :
Sehingga seluruh data variable pada typescript bisa bersifat strongly data type.
*/

let angkaBulat: number = 34;
let angkaDesimal:number = 23.5;
let sebuahKata:string = "Hello World";
let kata:string = 'halo dunia';
let kemungkinan:boolean = true;
let kosong:null = null;
let zonk:undefined;

//sifatnya seperti dynamic declaration
let apapun:any = "Test String";
let apapunDua:any = 200;

console.log("angkaBulat typeof: " + typeof(angkaBulat));
console.log("angkaDesimal typeof: " + typeof(angkaDesimal));
console.log("sebuahKata typeof: " + typeof(sebuahKata));
console.log("kata typeof: " + typeof(kata));
console.log("kemungkinan typeof: " + typeof (kemungkinan));
console.log("kosong typeof: " + typeof (kosong) + " ,value: " + kosong);
console.log("zonk typeof: " + typeof (zonk));
console.log("apapun typeof: " + typeof (apapun));
console.log("apapunDua typeof: " + typeof (apapunDua));