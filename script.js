/* Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, 
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra. */

//set the global variables
let slideIndex = 0;

let timer;

//arrays with obj
const myImages = [
  {
    url: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    title: "Svezia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Perù",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },

  {
    url: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    title: "Chile",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Argentina",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    title: "Colombia",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
];

builder();

function builder() {
  for (let i = 0; i < myImages.length; i++) {
    let slide = document.createElement("div");
    slide.setAttribute("class", "mySlide fade");
    let img = document.createElement("img");
    img.setAttribute("src", myImages[i].url);
    // add title
    let location = document.createElement("div");
    location.classList.add("location");
    location.innerText = myImages[i].title;
    // add info
    let description = document.createElement("div");
    description.classList.add("description");
    description.innerText = myImages[i].description;
    // append elements
    slide.appendChild(img);
    slide.appendChild(location);
    slide.appendChild(description);
    document.querySelector(".slideContainer").appendChild(slide);
    console.log(slide);
    // dots
    let span = document.createElement("span");
    span.classList.add("dot");
    span.addEventListener("click", function () {
      moveSlide(i);
    });
    document.querySelector(".indicator").appendChild(span);
  }
  console.log(myImages);
  playSlides();
}

function playSlides() {
  const slides = document.querySelectorAll(".mySlide");
  const dots = document.querySelectorAll(".dot");
  const active = document.querySelector(".active");
  if (active != null) {
    active.classList.remove("active");
  }
  // if slide index is greter then slide.length return slideIndex 0;
  if (slideIndex + 1 > slides.length) {
    slideIndex = 0;
  }

  slides.forEach(function (none) {
    none.style.display = "none";
  });

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
  slideIndex++;
  console.log(slideIndex);
  timer = setTimeout(playSlides, 3000);
}

function moveSlide(num) {
  //console.log(num);
  slideIndex = num;
  clearTimeout(timer);
  playSlides();
}
