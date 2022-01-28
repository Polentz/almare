const aboutBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");
const agendaBtn = document.getElementById("agenda-btn");
const aboutContent = document.querySelector(".main-content");
const contactContent = document.querySelector(".contact");
const agendaContent = document.querySelector(".agenda-content");
const closeBtnM = document.querySelector(".close-btn-m");
const closeBtnC = document.querySelector(".close-btn-c");
const closeBtnA = document.querySelector(".close-btn-a");
const closeGeneral = document.querySelector(".cover-image");

window.onload = functions;

function functions() {
    openContent(aboutBtn, aboutContent);
    openContent(contactBtn, contactContent);
    openContent(agendaBtn, agendaContent);

    openHover(aboutBtn, aboutContent);
    openHover(contactBtn, contactContent);
    openHover(agendaBtn, agendaContent);

    closeContent(closeBtnM, aboutContent);
    closeContent(closeBtnC, contactContent);
    closeContent(closeBtnA, agendaContent);

    closeContent(closeGeneral, aboutContent);
    closeContent(closeGeneral, contactContent);
    closeContent(closeGeneral, agendaContent);

}

function openContent(button, content) {
    button.addEventListener("click", () => {
        if (content.classList.contains(open)) {
            content.classList.remove("open");
        } else {
            content.classList.add("open");
        }
    });
}

function openHover(trigger, content) {
    trigger.addEventListener("mouseenter", () => {
        content.classList.add("open");
    })
}

function closeContent(close, content) {
    close.addEventListener("click", () => {
        content.classList.remove("open");
    });
}

// closeGeneral.addEventListener("click", () => {
//     closeContent();
// })


