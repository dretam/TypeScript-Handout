import './css/all.css';
import './css/normalize.css';
import './css/my-style.css';

import UserRow from './model/UserRow';
import Address from './model/Address';
import TodoRow from './model/TodoRow';
import { getAllUsers, getUserAddress, getUserToDos } from './service/RequestData';

(async function():Promise<void>{
  await populateUserData();
  addTableActionListener();
  addCloseDialogListener();
}());

async function populateUserData():Promise<void>{
    let htmlRows:string = '';
    let users:UserRow[] =  await getAllUsers();
    for(let user of users){
        let htmlRow:string = `
            <tr>
                <td>
                    <a class="action-button contact-button" href="javascript:;" data-id="${user.id}">Contact</a>
                    <a class="action-button posts-button" href="javascript:;" data-id="${user.id}">Posts</a>
                    <a class="action-button todo-button" href="javascript:;" data-id="${user.id}">To-Do</a>
                </td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.company}</td>
            </tr>`;
        htmlRows += htmlRow;
    }
    let userTbody:Element|null = document.querySelector(".users-body");
    userTbody!.innerHTML = htmlRows;
}

function addTableActionListener():void{
    addContactButtonListeners();
    addToDoButtonListener();
    addPostsButtonListener();
}

function addContactButtonListeners(): void{
    let contactButtons:NodeListOf<Element> = document.querySelectorAll(".contact-button");
    for(let button of contactButtons){
        button.addEventListener("click", async function(){
            let userId:string|null = button.getAttribute("data-id");
            let address:Address = await getUserAddress(userId!);
            openContactDialog(address);
        });
    }
}

function openContactDialog(address: Address){
    let modal:Element|null = document.querySelector(".modal");
    document.querySelector("#street")!.textContent = address.street;
    document.querySelector("#suite")!.textContent = address.suite;
    document.querySelector("#city")!.textContent = address.city;
    document.querySelector("#zipcode")!.textContent = address.zipcode;
    document.querySelector("#phone")!.textContent = address.phone;
    document.querySelector("#website")!.textContent = address.website;
    modal!.classList.add("modal-open");
}

function addToDoButtonListener(): void{
    let todoButtons:NodeListOf<Element> = document.querySelectorAll(".todo-button");
    for(let button of todoButtons){
        button.addEventListener("click", async function(){
            let userId:string|null = button.getAttribute("data-id");
            let toDos:TodoRow[] = await getUserToDos(userId!);
            fillToDoSection(toDos);
        });
    }
}

function fillToDoSection(toDos:TodoRow[]){
    let toDoBody:Element|null = document.querySelector('.todo-body');
    toDoBody!.innerHTML = "";
    let toDosHTML:string = "";
    for(let toDo of toDos){
        if(toDo.completed){
            let toDoHTML:string = `
            <div class="todo-list">
                <span>${toDo.title}</span>
                <i class="fas fa-check"></i>
            </div>`;
            toDosHTML += toDoHTML;
        } else {
            let toDoHTML:string = `
            <div class="todo-list">
                <span>${toDo.title}</span>
            </div>`;
            toDosHTML += toDoHTML;
        }
    }
    toDoBody!.innerHTML = toDosHTML;
}

function addPostsButtonListener(): void{
    let postButtons:NodeListOf<Element> = document.querySelectorAll(".posts-button");
    for(let button of postButtons){
        button.addEventListener("click", function(){
            let userId:string|null = button.getAttribute("data-id");
            localStorage.setItem("SelectedUserId", userId!);
            location.assign("posts.html");
        });
    }
}

function addCloseDialogListener(){
    let closeButton:Element|null = document.querySelector(".dialog .close-button");
    closeButton!.addEventListener('click', function(){
        let modal:Element|null = document.querySelector(".modal");
        modal!.classList.remove("modal-open");
        document.querySelector("#street")!.textContent = "";
        document.querySelector("#suite")!.textContent = "";
        document.querySelector("#city")!.textContent = "";
        document.querySelector("#zipcode")!.textContent = "";
        document.querySelector("#phone")!.textContent = "";
        document.querySelector("#website")!.textContent = "";
    });
}