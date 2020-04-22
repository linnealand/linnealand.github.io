// Transparent to solid navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= window.innerHeight) {
      $('.navbar').addClass('solid');
      $('#name').addClass('solid');
      $('#bars').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
      $('#name').removeClass('solid');
      $('#bars').removeClass('solid');
    }
  });
});

// Open/close navigation menu
function toggleNav() {
  $('.nav-icon').toggleClass('close');
  $('body').toggleClass('disable-scroll');

  if (document.getElementById("nav").style.height === "100%") {
    document.getElementById("nav").style.height = "0%";
  } else {
    document.getElementById("nav").style.height = "100%";
  }
}

// Smooth scrolling
$('nav').find('a').click(function (e) {
  e.preventDefault();
  var section = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(section).offset().top
  });
});

// More info for project (overlay)
$('.card, .arrow-icon').click(function() { 
  var id = $(this).attr('id');
  var num = id.slice(-1);
  $('#project-' + num + '.project-overlay').toggleClass('show');
  $('body').toggleClass('disable-scroll');
});
// function toggleMoreInfo() {
//   $('#project-1.project-overlay').toggleClass('show');
//   $('body').toggleClass('disable-scroll');
//   console.log($(this).parent());
// }


// Project image slideshow
/*var slideIndex1 = 1;
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
}*/