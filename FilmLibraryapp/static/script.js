function openModalWindow(){
    let coverDiv = document.createElement("div");
    coverDiv.classList.add("cover-div");
    document.body.append(coverDiv);

    let modalWindow = document.querySelector(".modal-window");
    modalWindow.style.display = "flex";
    setTimeout(function() {modalWindow.style.opacity = 1}, 1);
}

function deleteModalWindow() {
    let coverDiv = document.querySelector(".cover-div");
    coverDiv.remove();
    let modalWindow = document.querySelector(".modal-window");
    modalWindow.style.display = "none";
    modalWindow.style.opacity = 0;
}

let buttonClose = document.querySelector(".button-close");
buttonClose.addEventListener("click", deleteModalWindow);

let form = document.querySelector("form");
form.addEventListener("submit", deleteModalWindow);

setTimeout(openModalWindow, 5000)

$(document).ready(function () {
    $('#sendForm').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST", 
            url: $('#sendForm').action,
            data: $(this).serialize()
        });
    })
})
