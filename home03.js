const mainBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");
const agendaBtn = document.getElementById("agenda-btn");
const mainContent = document.querySelector(".main-content");
const contactContent = document.querySelector(".contact");
const agendaContent = document.querySelector(".agenda-content");
const closeBtnM = document.querySelector(".close-btn-m a");
const closeBtnC = document.querySelector(".close-btn-c a");
const closeBtnA = document.querySelector(".close-btn-a a");

window.onload = functions;

function functions() {
    closeFunction(closeBtnM, mainContent, "close-left");
    closeFunction(closeBtnC, contactContent, "close-left");
    closeFunction(closeBtnA, agendaContent, "close-right");

    openFunction(mainBtn, mainContent, "close-left");
    openFunction(contactBtn, contactContent, "close-left");
    openFunction(agendaBtn, agendaContent, "close-right");
}

function closeFunction(button, content, className) {
    button.addEventListener("click", () => {
        if (content.classList.contains(className)) {
            content.classList.remove(className);
        } else {
            content.classList.add(className);
        }
    });
}

function openFunction(button, content, className) {
    button.addEventListener("mouseenter", () => {
        content.classList.remove(className);
    });
}

