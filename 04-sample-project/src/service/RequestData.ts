import UserRow from "../model/UserRow";
import Address from "../model/Address";
import TodoRow from "../model/TodoRow";
import PostRow from "../model/PostRow";

export async function getAllUsers(): Promise<UserRow[]>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users:any[] = await response.json();
    let userRows:UserRow[] = [];
    for(let user of users){
        userRows.push(new UserRow({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            company: user.company.name
        }))
    }
    return userRows;
}

export async function getUserAddress(userId:string): Promise<Address>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user:any = await response.json();
    const address = new Address(user);
    return address;
}

export async function getUserToDos(userId:string): Promise<TodoRow[]>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todos:any[] = await response.json();
    let todoRows:TodoRow[] = [];
    for(let todo of todos){
        todoRows.push(new TodoRow(todo));
    }
    return todoRows;
}

export async function getUserName(userId:string): Promise<string>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user:any = await response.json();
    return user.name;
}

export async function getAllPosts(userId:string): Promise<PostRow[]>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts:any[] = await response.json();
    let postRows:PostRow[] = [];
    for(let post of posts){
        postRows.push(new PostRow(post));
    }
    return postRows;
}