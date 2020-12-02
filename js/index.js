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
const buttons = document.querySelectorAll('.btn');

buttons.forEach (button => {
    document.addEventListener("keydown", e => {
        button.style.background ="black";
    });
    document.addEventListener("keyup", e => {
        button.style =". btn";
    })
});

document.addEventListener('click', e => 
    buttons.forEach (button => {
        button.style.color = "red"
    }))


// wheel


// load

// focus
// resize
// scroll
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  console.log(`Ahmed scrolled to ${scroll_pos}`)
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


// select
// dblclick
// drag and drop