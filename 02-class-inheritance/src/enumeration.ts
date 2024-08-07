console.log("====================Enum======================");

enum Religion {Islam, Christian, Catholic, Hindu, Buddha}
enum Gender {M = 'Male', F = 'Female'}

class Person{
    name?:string;
    religion?:Religion;
    gender?:Gender
}

let randy:Person = new Person();
randy.name = 'Randy Andara';
randy.religion = Religion.Hindu;
randy.gender = Gender.M;

console.log(`Name: ${randy.name}, Religion: ${randy.religion}, Gender: ${randy.gender}`);