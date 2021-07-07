const nav = document.querySelector('.nav')

window.addEventListener('scroll',() =>{
  nav.classList.toggle('active',window.scrollY >150)
})

/* MENU HAMBURGUESA */
const hamburguer = document.querySelector('.hamburguer')
const navbar = document.querySelector('.navbar')
let abierto=false;


hamburguer.addEventListener('click',() =>{
  navbar.classList.toggle('active');
  abierto=true;
})

window.addEventListener('resize',() =>{
    if(abierto){
      navbar.classList.remove('active')
      abierto=false;
    }
})

/* SLIDER */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* TAB TOGGLE MATCH */
const tablinks = Array.from(document.querySelectorAll('.tablinks'));
const tabcontent = Array.from(document.querySelectorAll('.tabcontent'));

document.getElementById('tabs').addEventListener('click', e => {
    if(e.target.classList.contains('tablinks')){
      let i = tablinks.indexOf(e.target)
      tablinks.map(tab => tab.classList.remove('active'))
      tablinks[i].classList.add('active')

      tabcontent.map(tab => tab.classList.remove('active'))
      tabcontent[i].classList.add('active')
    }
})

/* TAB TOGGLE LIVE-STREAM */
const tablinksStream = Array.from(document.querySelectorAll('.tablinks-stream'));
const tabcontentStream = Array.from(document.querySelectorAll('.tabcontent-stream'));



 document.getElementById('tabs-stream').addEventListener('click', e => {
  


   if(e.target.classList.contains('tablinks-stream')){

   let i = tablinksStream.indexOf(e.target)
    tablinksStream.map(tab => tab.classList.remove('active'))
    tablinksStream[i].classList.add('active')

    tabcontentStream.map(tab => tab.classList.remove('active'))
    tabcontentStream[i].classList.add('active') 
  } 
}) 


