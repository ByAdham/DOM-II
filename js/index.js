// Your code goes here
// mouseover
const navigationLinks = Array.from(document.getElementsByClassName('nav-link'));

console.log(navigationLinks);

navigationLinks.forEach(link => {
    link.addEventListener("mouseover",(e)=>{
        link.style.color = "red";
        link.style.size ="1.5";
    });
    link.addEventListener("mouseout",(e)=>{
        link.style = "initial";
    });
});

// keydown
const buttons = Array.from(document.getElementsByClassName('btn'));

// function changeButtonsColor () {
    buttons.forEach (button => {
        document.addEventListener("keydown", e => {
            button.style.background ="black";
        });
        document.addEventListener("keyup", e => {
            button.style.background ="red";
        });
    });
// };
changeButtonsColor();