let slideIndex = 1;
showSlides(slideIndex);

// tombol next / prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// klik dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";

  if (dots.length > 0) {
    dots[slideIndex - 1].classList.add("active");
  }
}