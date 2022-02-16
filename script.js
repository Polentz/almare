const slideBtn = document.querySelector(".slide-btn");
const slideContent = document.querySelector(".slide-content");
const closeBtn = document.querySelector(".close-btn");
const main = document.querySelector(".main");
const mainContent = document.querySelector(".main-content");
const logo = document.querySelector(".logo");
// const marquee = document.querySelector(".marquee");

window.onload = functions;

function functions() {
    openContent(slideBtn, slideContent);
    closeContent(closeBtn, slideContent);
    closeContent(mainContent, slideContent);
}

function openContent(button, content) {
    button.addEventListener("click", () => {
        if (content.classList.contains(open)) {
            content.classList.remove("open");
            main.style.color = "inherit";
            main.style.filter = "blur(0px)";
            logo.style.filter = "blur(0px)";
            mainContent.style.cursor = "inherit";
            // marquee.classList.remove("paused");
            closeBtn.style.opacity = "0";
        } else {
            content.classList.add("open");
            main.style.color = "var(--sc-color)";
            main.style.filter = "blur(3px)";
            logo.style.filter = "blur(3px)";
            mainContent.style.cursor = "default";
            // marquee.classList.add("paused");
            setTimeout(() => {
                closeBtn.style.opacity = "1";
            }, 1000);
        }
    });
}

function closeContent(close, content) {
    close.addEventListener("click", () => {
        content.classList.remove("open");
        main.style.color = "inherit";
        main.style.filter = "blur(0px)";
        logo.style.filter = "blur(0px)";
        mainContent.style.cursor = "inherit";
        closeBtn.style.opacity = "0";
        // setTimeout(() => {
        //     marquee.classList.remove("paused");
        // }, 1000);
    });
}

