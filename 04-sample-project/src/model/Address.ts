export default class Address{
    readonly street:string;
    readonly suite:string;
    readonly city:string;
    readonly zipcode:string;
    readonly phone:string;
    readonly website:string;

    constructor({address:{street, suite, city, zipcode}, phone, website}: 
        {address:any, street:string, suite:string, city:string, zipcode:string, phone:string, website:string}){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.phone = phone;
        this.website = website;
    }   
}