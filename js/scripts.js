// Slide

$(document).ready(function () {
  $(".produto-slide").slick({
    arrows: false,
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
if (window.matchMedia("screen and (max-width: 767px)").matches) {
  $(".nav-mobile").hide();
  $(".logo-menu-mobile").hide();
  $(".bg-black").removeClass("active");

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(".logo-menu-mobile").slideToggle(500);
    $(".nav-mobile").slideToggle(500);

    const scrollTop = $($(this).attr("href")).position().top - 50;

    $("html, body").animate({ scrollTop });

    $(".logo-menu-mobile").hide();
    $(".nav-mobile").hide();
    $(".bg-black").removeClass("active");
    $(".hamburger-menu").removeClass("active");
  });
} else {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    const scrollTop =
      $($(this).attr("href")).position().top - $navbar.outerHeight();

    $("html, body").animate({ scrollTop });
  });
}

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

  $(".hamburger-menu").on("click", function () {
    $(".logo-menu-mobile").slideToggle(500);
    $(".nav-mobile").slideToggle(500);
    $(".bg-black").toggleClass("active");
    $(".hamburger-menu").toggleClass("active");
    $(".header-mobile").click(function (event) {
      event.stopPropagation();
    });
    $(document).click(function () {
      $(".logo-menu-mobile").hide();
      $(".nav-mobile").hide();
    });
    $(".bg-black.active").on("click", function () {
      console.log("Função funcionando");
      $(".nav-mobile").hide();
      $(".logo-menu-mobile").hide();
      $(".bg-black").removeClass("active");
      $(".hamburger-menu").removeClass("active");
    });
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
    window.open("http://danielsantanawebdesign-com.umbler.net/en", "_self");
  } else {
    window.open("http://danielsantanawebdesign-com.umbler.net/", "_self");
  }
}

// Formulário

if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro:
      "<div id='form-erro'><h3>Erro no Envio!</h3><p>Um erro ocorreu, tente para o email santanadasilvadaniel@gmail.com</p></div>", // mensagem de erro
    sucesso:
      "<div id='form-sucesso'><h3>Formulário enviado com sucesso</h3><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}
