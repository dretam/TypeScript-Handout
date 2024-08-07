export default class UserRow{
    readonly id: number;
    readonly name:string;
    readonly username:string;
    readonly email:string;
    readonly company:string;

    constructor({id, name, username, email, company}: {id: number, name: string, username: string, email:string, company:string}){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.company = company;
    }   
}