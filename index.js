window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
  });

  document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
    function showSlide(index) {
      slides[currentSlide].classList.remove("active");
      slides[index].classList.add("active");
      currentSlide = index;
    }
  
    setInterval(function() {
      var nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }, 2000);
  });

  var year = new Date().getFullYear();
  document.getElementById("currentYear").textContent = year;