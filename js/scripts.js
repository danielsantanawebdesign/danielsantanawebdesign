// Slide

$(document).ready(function () {
  $(".produto-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// Maquina de escrever
function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}

const title = document.querySelector(".home-title");
typeWriter(title);

// Efeito de suavizar no HREF

const $navbar = $(".header");

$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  const scrollTop =
    $($(this).attr("href")).position().top - $navbar.outerHeight();

  $("html, body").animate({ scrollTop });
});

// Toogle
$(document).ready(function () {
  $("#ans2").hide();
  $("#ans3").hide();
  $("#ans4").hide();
  $("#ans5").hide();
  $("#ask1").on("click", function () {
    $("#ans1").toggle(500);
  });
  $("#ask2").on("click", function () {
    $("#ans2").toggle(500);
  });
  $("#ask3").on("click", function () {
    $("#ans3").toggle(500);
  });
  $("#ask4").on("click", function () {
    $("#ans4").toggle(500);
  });
  $("#ask5").on("click", function () {
    $("#ans5").toggle(500);
  });
});

// Menu
$(function () {
  $(document).scroll(function () {
    var $nav = $(".header");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Language

function changeFunc($i) {
  if ($i == "English") {
    window.open(
      "https://danielsantanawebdesign.github.io/danielsantanawebdesign/en",
      "_self",
    );
  } else {
    window.open(
      "https://danielsantanawebdesign.github.io/danielsantanawebdesign",
      "_self",
    );
  }
}
