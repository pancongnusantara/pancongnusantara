let slideIndex = 1;
showSlides(slideIndex);

// Tombol next / prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Klik dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  // Loop slide
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide semua slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Active current dot
  if (dots.length > 0) {
    dots[slideIndex - 1].classList.add("active");
  }
}

/* ========================= */
/* AUTO SLIDE */
/* ========================= */

setInterval(() => {
  plusSlides(1);
}, 4000);

/* ========================= */
/* SMOOTH SCROLL NAVBAR */
/* ========================= */

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {

    const targetId = this.getAttribute('href');

    if (targetId.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  })