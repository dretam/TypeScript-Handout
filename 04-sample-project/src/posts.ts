import './css/all.css';
import './css/normalize.css';
import './css/my-style.css';
import { getUserName, getAllPosts } from './service/RequestData';
import PostRow from './model/PostRow';

(function():void{
    let userId:string = getUserId();
    renderUser(userId);
    renderPosts(userId);
}())

function getUserId():string{
    let userId:string|null = localStorage.getItem("SelectedUserId");
    return userId!;
}

async function renderUser(userId:string): Promise<void>{
    let userName:string = await getUserName(userId);
    fillHeaderWithUserName(userName);
}

function fillHeaderWithUserName(name:string): void{
    let userNameSpan = document.querySelector(".user-name");
    userNameSpan!.textContent = name;
}

async function renderPosts(userId:string): Promise<void>{
    let posts = await getAllPosts(userId);
    populatePostData(posts);
}

function populatePostData(posts:PostRow[]):void{
    let htmlRows = "";
    for(let post of posts){
        let {title, body} = post;
        let htmlRow = `
        <tr>
            <td>${title}</td>
            <td>${body}</td>
        </tr>`
        htmlRows += htmlRow;
    }
    let postTbody = document.querySelector(".posts-body");
    postTbody!.innerHTML = htmlRows;
}