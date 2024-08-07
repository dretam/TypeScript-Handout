(function(){
    getAllUsers();
    addCloseDialogListener();
}())

function getAllUsers(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onload = function(){
        let response = JSON.parse(request.responseText);
        populateUserData(response);
    }
}

function populateUserData(users){
    let htmlRows = "";
    for(let user of users){
        let {id, name, username, email, company} = user;
        let htmlRow = `
        <tr>
            <td>
                <a class="action-button contact-button" href="javascript:;" data-id="${id}">Contact</a>
                <a class="action-button posts-button" href="javascript:;" data-id="${id}">Posts</a>
                <a class="action-button todo-button" href="javascript:;" data-id="${id}">To-Do</a>
            </td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${company.name}</td>
        </tr>`
        htmlRows += htmlRow;
    }
    let userTbody = document.querySelector(".users-body");
    userTbody.innerHTML = htmlRows;

    addContactButtonListeners();
    addToDoButtonListener();
    addPostsButtonListener();
}

function addContactButtonListeners(){
    let contactButtons = document.querySelectorAll(".contact-button");
    for(let button of contactButtons){
        button.addEventListener("click", function(event){
            let userId = button.getAttribute("data-id");
            getUserAddress(userId);
        });
    }
}

function getUserAddress(userId){
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);
    request.send();
    request.onload = function(){
        let response = JSON.parse(request.responseText);
        openContactDialog(response);
    }
}

function openContactDialog({address, phone, website}){
    let modal = document.querySelector(".modal");
    document.querySelector("#street").textContent = address.street;
    document.querySelector("#suite").textContent = address.suite;
    document.querySelector("#city").textContent = address.city;
    document.querySelector("#zipcode").textContent = address.zipcode;
    document.querySelector("#phone").textContent = phone;
    document.querySelector("#website").textContent = website;
    modal.classList.add("modal-open");
}

function addCloseDialogListener(){
    let closeButton = document.querySelector(".dialog .close-button");
    closeButton.addEventListener('click', function(event){
        let modal = document.querySelector(".modal");
        modal.classList.remove("modal-open");
        document.querySelector("#street").textContent = "";
        document.querySelector("#suite").textContent = "";
        document.querySelector("#city").textContent = "";
        document.querySelector("#zipcode").textContent = "";
        document.querySelector("#phone").textContent = "";
        document.querySelector("#website").textContent = "";
    });
}

function addToDoButtonListener(){
    let todoButtons = document.querySelectorAll(".todo-button");
    for(let button of todoButtons){
        button.addEventListener("click", function(event){
            let userId = button.getAttribute("data-id");
            getUserToDos(userId);
        });
    }
}

function getUserToDos(userId){
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    request.send();
    request.onload = function(){
        let response = JSON.parse(request.responseText);
        fillToDoSection(response);
    }
}

function fillToDoSection(toDos){
    let toDoBody = document.querySelector('.todo-body');
    toDoBody.innerHTML = "";
    let toDosHTML = "";
    for(let toDo of toDos){
        if(toDo.completed){
            let toDoHTML = `
            <div class="todo-list">
                <span>${toDo.title}</span>
                <i class="fas fa-check"></i>
            </div>`;
            toDosHTML += toDoHTML;
        } else {
            let toDoHTML = `
            <div class="todo-list">
                <span>${toDo.title}</span>
            </div>`;
            toDosHTML += toDoHTML;
        }
    }
    toDoBody.innerHTML = toDosHTML;
}

function addPostsButtonListener(){
    let postButtons = document.querySelectorAll(".posts-button");
    for(let button of postButtons){
        button.addEventListener("click", function(event){
            let userId = button.getAttribute("data-id");
            localStorage.setItem("SelectedUserId", userId);
            location.assign("posts.html");
        });
    }
}