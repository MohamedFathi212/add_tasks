// script.js

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.addEventListener("DOMContentLoaded", loadTasks);


function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function addTask(taskText) {
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <span onclick="removeTask(this)">\u00d7</span>`;
    listContainer.appendChild(li);
    
    saveTasks(); 
}

function add() {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        addTask(inputBox.value);
    }

    inputBox.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
    saveTasks(); 
}

// FUNCTION  addEventListener : remove thing when click on button .

// let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         span.addEventListener("click", function() {
//             li.remove();
//         });
        
//         li.appendChild(span);
//         listContainer.appendChild(li);
