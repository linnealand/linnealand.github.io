// Show navbar on scroll up
var prevPos = window.pageYOffset;
window.onscroll = function() {
    var currentPos = window.pageYOffset;
    if (prevPos > currentPos) {
        document.getElementsByTagName('nav')[0].style.visibility = 'visible';
    } else {
        document.getElementsByTagName('nav')[0].style.visibility = 'hidden';
    }
    prevPos = currentPos;
}

// Smooth scrolling
$('nav').find('a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(section).offset().top
    });
});


// Project img slideshow
var slideIndex1 = 1;
showSlides(1, slideIndex1);
var slideIndex2 = 1;
showSlides(2, slideIndex2);
var slideIndex3 = 1;
showSlides(3, slideIndex3);

// Next/previous controls
function plusSlides(p, n) {
  if (p == 1) {
    showSlides(p, slideIndex1 += n)
  }
  else if (p == 2) {
    showSlides(p, slideIndex2 += n)
  }
  else if (p == 3) {
    showSlides(p, slideIndex3 += n)
  }
  // showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(p, n) {
  showSlides(p, slideIndex = n);
}

function showSlides(p, n) {
  var i;
  if (p == 1) {
    var slides = document.getElementsByClassName("slides1");
    if (n > slides.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
      slideIndex1 = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex1-1].style.display = "block";

  }
  else if (p == 2) {
    var slides = document.getElementsByClassName("slides2");
    if (n > slides.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
      slideIndex2 = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex2-1].style.display = "block";
  }
  else if (p == 3) {
    var slides = document.getElementsByClassName("slides3");
    if (n > slides.length) {
      slideIndex3 = 1
    }
    if (n < 1) {
      slideIndex3 = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex3-1].style.display = "block";
  }
}
