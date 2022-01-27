// window.onload = functions;

// function functions() {
//     textColors();
// }

// function textColors() {
//     let copyLinks = document.querySelectorAll(".copy a");
//     copyLinks.forEach(link => {
//         link.addEventListener("mouseenter", () => {
//             link.style.color = "#1c1cff";
//         });
//         link.addEventListener("mouseleave", () => {
//             link.style.color = "#feb398";
//         });
//     });
// }

// window.onload = functions;

// function functions() {
//     showLogo();
// }

// function showLogo() {
//     const logo = document.querySelector(".initial")
//     const span = document.querySelectorAll("span");
//     span.forEach(theSpan => {
//         theSpan.addEventListener("mouseenter", () => {
//             logo.style.mixBlendMode = "multiply";
//             logo.style.opacity = ".5";
//         });
//         theSpan.addEventListener("mouseleave", () => {
//             logo.style.opacity = "0";
//         });
//     })
// }

// document.addEventListener("DOMContentLoaded", function () {
//     for (var t, e, n, o = document.querySelectorAll(".js-hover-trigger"),
//         i = o.length,
//         d = document.querySelector(".js-text-hover"),
//         c = 0;
//         c < i;
//         c++)o[c].addEventListener("mouseover", function (o) {
//             document.body.classList.contains("touch") || (document.body.classList.add("activeTextHover"),
//                 d.innerHTML = o.target.innerHTML,
//                 t = d.getBoundingClientRect().width,
//                 e = Math.max(0, t - window.innerWidth),
//                 n = o.target.getBoundingClientRect().width)
//         }),
//             o[c].addEventListener("mouseout", function (t) {
//                 document.body.classList.contains("touch") || (document.body.classList.remove("activeTextHover"),
//                     d.innerHTML = "")
//             }),
//             o[c].addEventListener("mousemove", function (t) {
//                 if (!document.body.classList.contains("touch")) {
//                     var o = t.target.getBoundingClientRect(),
//                         i = t.x - o.left,
//                         c = -1 * i * e / n;
//                     d.style.transform = "translate(" + c + "px, -50%)"
//                 }
//             })
// });

