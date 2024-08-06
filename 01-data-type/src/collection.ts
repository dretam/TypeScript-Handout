console.log("====================Collection======================");

let sederetanKata: string[] = ["Satu", "Dua", "Tiga", "Empat"];
let sederetanAngka: number[] = [23, 45, 12, 67];
let sederetanFlag: boolean[] = [true, false, true, false];
let sederetanCampur: any[] = ["Satu", 23, true];
let sederetanMix = ["Dua", 45, false];

for(let kata of sederetanKata){
    console.log(kata);
}

for(let angka of sederetanAngka){
    console.log(angka);
}

for(let flag of sederetanFlag){
    console.log(flag);
}

for(let campur of sederetanCampur){
    console.log(campur);
}

for(let mix of sederetanMix){
    console.log(mix);
}