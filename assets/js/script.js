(function ($) {
  "use strict";
  //  WOW init
  new WOW().init();


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $("#navbar-fixed-top").css("background", "#ffffff");
      $("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px");
      $(".destop-nav-bar .header_links").css("color", "#000000");
      $(".destop-nav-bar .logo h1").css("color", "#ffffff");
      $(".destop-nav-bar .header_links.active").css(
        "border-bottom",
        "2px solid #ffffff"
      );
      $(".hamburger div").css(
        "background", "#ffffff"
      );
      $(".hamburger.active div").css(
        "background", "#00000"
      );
    } else {
      $("#navbar-fixed-top").css("background", "#FF1493");
      $("#navbar-fixed-top").css("box-shadow", "none");
      $(".destop-nav-bar .header_links").css("color", "#ffffff");
      $(".destop-nav-bar .logo h1").css("color", "#1a1a1a");
      $(".destop-nav-bar .header_links.active").css(
        "border-bottom",
        "2px solid #8b0129"
      );
      $(".hamburger div").css(
        "background", "#000000"
      );
      $(".hamburger.active div").css(
        "background", "#00000"
      );
    }
  });
  // MOBILE SCREEN SIDE NAV
  var sidebarBox = document.querySelector("#box");
  var sidebarBtn = document.querySelector("#btn");
  var pageWrapper = document.querySelector("#main-content");

  sidebarBtn.addEventListener("click", function (event) {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      sidebarBox.classList.remove("active");
      $("#main-content #btn div").css(
        "background", "#ffffff"
      );
    } else {
      this.classList.add("active");
      sidebarBox.classList.add("active");
      $("#main-content #btn div").css(
        "background", "#000"
      );
    }
  });

  pageWrapper.addEventListener("click", function (event) {
    if (sidebarBox.classList.contains("active")) {
      sidebarBtn.classList.remove("active");
      sidebarBox.classList.remove("active");
    }
  });
  window.addEventListener("keydown", function (event) {
    if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
      sidebarBtn.classList.remove("active");
      sidebarBox.classList.remove("active");
    }
  });

  //Butter
  // butter.init({
  //   wrapperId: "butter",
  // });

  // Scroll to div on next page
  $(document).ready(function () {
    $("html, body").hide();

    if (window.location.hash) {
      setTimeout(function () {
        $("html, body").scrollTop(0).show();
        $("html, body").animate(
          {
            scrollTop: $(window.location.hash).offset().top,
          },
          1000
        );
      }, 0);
    } else {
      $("html, body").show();
    }
  });

  // Click Scroll to Top Function
  $(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });

  $("body").append(
    "<a href='#' class='back-top'><i class='fa fa-angle-up'></i></a>"
  );
  var amountScrolled = 700;
  var backBtn = $("a.back-top");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > amountScrolled) {
      backBtn.addClass("back-top-visible");
    } else {
      backBtn.removeClass("back-top-visible");
    }
  });
  backBtn.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });
})(jQuery);
