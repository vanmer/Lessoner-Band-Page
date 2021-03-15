var circle = document.querySelector(".circle");
var navLinks = document.querySelectorAll(".grid-item h2");
var icons = document.querySelectorAll(".icon");
// var covers = document.querySelectorAll(".cover");
var aboutLinks = document.querySelectorAll(".dsvgo a");

TweenLite.set(circle, {
  xPercent: -50,
  yPercent: -50
});

window.addEventListener("mousemove", moveCircle);

function moveCircle(e) {
	TweenLite.to(circle, 0.3, {
    x: e.clientX,
    y: e.clientY
  });
};

navLinks.forEach( link => {
    link.addEventListener('mouseleave', () => {
        circle.classList.remove('link-grow');
        // link.classList.remove('hovered-link');
    })
    link.addEventListener('mouseover', () => {
        circle.classList.add('link-grow');
        // link.classList.add('hovered-link');
    })
});

// covers.forEach( cover => {
//     cover.addEventListener('mouseleave', () => {
//         circle.classList.remove('link-grow-m');
//     })
//     cover.addEventListener('mouseover', () => {
//         circle.classList.add('link-grow-m');
//     })
// });

icons.forEach( icon => {
    icon.addEventListener('mouseleave', () => {
        circle.classList.remove('link-grow-s');
    })
    icon.addEventListener('mouseover', () => {
        circle.classList.add('link-grow-s');
    })
});

aboutLinks.forEach( link => {
    link.addEventListener('mouseleave', () => {
        circle.classList.remove('link-grow-s');
    })
    link.addEventListener('mouseover', () => {
        circle.classList.add('link-grow-s');
    })
});

