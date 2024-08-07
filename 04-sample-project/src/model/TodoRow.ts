export default class TodoRow{
    readonly id: number;
    readonly title:string;
    readonly completed:false;

    constructor({id, title, completed}: {id: number, title: string, completed: false}){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }   
}