// Sélectionner toutes les images
var images = document.querySelectorAll(".img");

images.forEach(img => {
  img.addEventListener("click", function() {
    var modal = document.getElementById(this.getAttribute("data-modal"));
    var modalImg = modal.querySelector(".modal-content");
    var captionText = modal.querySelector(".modal-caption");

    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    // Gérer la fermeture
    var closeBtn = modal.querySelector(".close");
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  });
});

//Slider  Grand Project
let index = 0;
const totalSlides = document.querySelectorAll('.mySlides').length;
const slider = document.getElementById('slider');

function moveSlides(n) {
    index += n;

    // S'assurer que l'index reste dans les limites
    if (index >= totalSlides) {
        index = 0; // Retourne au début
    } 
    if (index < 0) {
        index = totalSlides - 1; // Va à la dernière slide
    }

    let slideWidth = document.querySelector('.mySlides').clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}


