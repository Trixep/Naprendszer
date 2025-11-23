$(function(){
  if($('body').is('.fooldal')){
    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains_behind = document.getElementById('mountains_behind');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let header = document.querySelector('header');
    
    window.addEventListener('scroll', function()
    {
      if (screen.width > 700) {
        let value = window.scrollY;
        stars.style.left = value * 0.15 + 'px';
        moon.style.bottom = value * -1.5 + 'px';
        mountains_behind.style.bottom = value * -0.5 + 'px';
        text.style.marginRight = value * 3 + 'px';
        text.style.marginTop = value * 1 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        header.style.top = value * 0.7 + 'px';
      } else {
        let value = window.scrollY;
        stars.style.left = value * 0.15 + 'px';
        moon.style.bottom = value * -0.5 + 'px';
        mountains_behind.style.bottom = value * -0.1 + 'px';
        text.style.marginRight = value * 1.5 + 'px';
        text.style.marginTop = value * 0.8 + 'px';
        btn.style.marginTop = value * 1.25 + 'px';
        header.style.top = value * 0.8 + 'px';
      }
    })
  } else if($('body').is('.planets')){
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  } else if($('body').is('.nap')){
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active1');

        btns.forEach((btn) => {
          btn.classList.remove('active1');
        });
      });

      slides[manual].classList.add('active1');
      btns[manual].classList.add('active1');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active1');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active1');
          });

        slides[i].classList.add('active1');
        btns[i].classList.add('active1');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 5000);
      }
      repeater();
    }
    repeat();
  }
});

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.ballrol, .jobbrol, .lentrol');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 300;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
  }
}

const ikonMenu = document.querySelector('.ikon');
const navigacio = document.querySelector('.navigacio');
ikonMenu.onclick = function(){
  ikonMenu.classList.toggle('active');
  navigacio.classList.toggle('active')
}
document.addEventListener("click", function(evt) {
  let flyoutEl = document.querySelector('.close'),
  targetEl = evt.target;     
  do {
    if(targetEl == flyoutEl) {
      return;
    }
    targetEl = targetEl.parentNode;
  } while (targetEl);
  ikonMenu.classList.remove('active');
  navigacio.classList.remove('active')
})

var mybutton = document.getElementById("TopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.classList.add('active');
  } else {
    mybutton.classList.remove('active');
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let width = screen.width;
if (width < 701) {
  var timer = null;
  window.addEventListener('scroll', function() {
    if(timer !== null) {
      clearTimeout(timer);        
    }
    timer = setTimeout(function() {
      mybutton.classList.remove('active');
    }, 2500);
  }, false);
}

function myFunction() {
  window.location = "bolygok.html";
}

var load = document.querySelector('.load');
var stopscroll = document.querySelector('body');
var x = document.getElementById("rocket").complete;
let img = document.querySelector('.rocket');
var timer = null;
if (x = true) {
  img.classList.add('start');
  timer = setTimeout(function() {
    $(document).ready(function(){
      load.classList.add('loaded');
      stopscroll.style.overflowY = "auto";
    });
  }, 1500);
}

function stars(){
  let count = 50;
  let scene = document.querySelector('.load');
  let i = 0;
  while(i < count){
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;
    star.style.left = x + 'px';
    star.style.width = 0.2 + 'vh';
    star.style.height =   h * 0.2 + 'vh';
    star.style.animationDuration = duration + 's';
    scene.appendChild(star);
    i++
  }
}
stars()