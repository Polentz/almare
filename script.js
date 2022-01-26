// window.onload = functions;

// function functions() {
//     textColors();
// }

// function textColors() {
//     const text = document.querySelectorAll(".copy p");
//     const container = document.querySelector(".main-content");
//     const copyLinks = document.querySelectorAll(".copy a");

//     text.forEach(element => {
//         element.addEventListener("mouseenter", () => {
//             container.classList.add("blend");
//             copyLinks.forEach(link => {
//                 link.style.color = "#1c1cff";
//             });
//         });
//         element.addEventListener("mouseleave", () => {
//             container.classList.remove("blend");
//             copyLinks.forEach(link => {
//                 link.style.color = "#feb398";
//             });
//         });
//     });
// }

window.onload = functions;

function functions() {
    textColors();
}

function textColors() {
    let copyLinks = document.querySelectorAll(".copy a");
    copyLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#1c1cff";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "#feb398";
        });
    });
}