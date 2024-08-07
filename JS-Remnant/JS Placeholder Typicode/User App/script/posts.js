(function(){
    let userId = getUserId();
    getUserName(userId);
    getAllPosts(userId);
}())

function getUserId(){
    return localStorage.getItem("SelectedUserId");
}

function getUserName(userId){
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);
    request.send();
    request.onload = function(){
        let response = JSON.parse(request.responseText);
        fillHeaderWithUserName(response);
    }
}

function fillHeaderWithUserName({name}){
    let userNameSpan = document.querySelector(".user-name");
    userNameSpan.textContent = name;
}

function getAllPosts(userId){
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    request.send();
    request.onload = function(){
        let response = JSON.parse(request.responseText);
        populatePostData(response);
    }
}

function populatePostData(posts){
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
    postTbody.innerHTML = htmlRows;
}