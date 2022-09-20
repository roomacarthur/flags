// function questionHover(e) {
//     let qButton = document.getElementsByClassName("answer");
//     for (let i = 0; i < qButton.length; i++) {
//         qButton[i].onmouseover=function() {
//             qButton[i].classList.add("mobileBtn");
//         };
//         qButton[i].onmouseleave=function() {
//             qButton[i].classList.remove("mobileBtn");
//         };
//     }

// }
// questionHover();

function buttonHover(){
    let button = document.getElementsByClassName("answer");
    for (let i = 0; i < button.length; i++) {
        button[i].onmouseover=function(){
            button[i].classList.add("mobileBtn");
        };
        button[i].onmouseleave=function(){
            button[i].classList.remove("mobileBtn");
        };
    }
};
buttonHover();