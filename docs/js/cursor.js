// Select the elements
// let mouseCursor = document.querySelector('.cursor');
// let navLinks = document.querySelectorAll(".card-name");

// window.addEventListener('mousemove', cursor);

// function cursor(e) {
//     mouseCursor.style.top = e.pageY + 'px';
//     mouseCursor.style.left = e.pageX + 'px';
// }

// document.addEventListener('mousemove', e => {
//     mouseCursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
// });



// var circle = document.querySelector(".circle");

// TweenLite.set(circle, {
//   xPercent: -50,
//   yPercent: -50
// });

// window.addEventListener("mousemove", moveCircle);

// function moveCircle(e) {
// 	TweenLite.to(circle, 0.3, {
//     x: e.clientX,
//     y: e.clientY
//   });
// }






// var $circle = $('.circle');

// function moveCircle(e) {
// 	TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// TweenLite.set(circle, {
//   xPercent: -50,
//   yPercent: -50
// });


// var navLinks = $('.card-name');

// var $circle = $('.circle');
// function moveCircle(e) {
// 	TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// $(window).on('mousemove', moveCircle);


var circle = document.querySelector(".circle");
var navLinks = document.querySelectorAll(".grid-item h2");
var cover = document.querySelectorAll(".grid-item ");

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
}

navLinks.forEach( link => {
    link.addEventListener('mouseleave', () => {
        circle.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })
    link.addEventListener('mouseover', () => {
        circle.classList.add('link-grow');
        link.classList.add('hovered-link');
    })
})

